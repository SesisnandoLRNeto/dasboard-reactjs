import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/contentHeader';
import HistoryFinanceCard from '../../components/historyFinanceCard';
import SelectInput from '../../components/selectInput';
import expensives from '../../repositories/expensives';
import gains from '../../repositories/gains';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { Container, Content, Filters } from './styles';
import monthEnum from '../../utils/months';

export interface IListData {
  id: string;
  description: string;
  type: string;
  frequency: string;
  amountFormatted: string;
  dateFormatted: string;
  tagColor: string;
}

export type GenericObject = { [key: string]: any };

const List: React.FC = () => {
  const { type: balanceType } = useParams();
  const [listData, setListData] = useState<IListData[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState([
    'recurrent',
    'possible',
  ]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const { title, lineColor, data } = useMemo(() => {
    return balanceType === 'income'
      ? { title: 'Income', lineColor: '#4E41F0', data: gains }
      : { title: 'Spent', lineColor: '#E44C4E', data: expensives };
  }, [balanceType]);

  const months = useMemo(() => {
    return monthEnum.map((month, index) => ({
      value: index + 1,
      label: month,
    }));
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => ({ value: year, label: year }));
  }, [data]);

  function handleSelectSpent(frenquecy: string) {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frenquecy
    );

    if (alreadySelected >= 0) {
      const filteredFrequency = selectedFrequency.filter(
        (item) => item !== frenquecy
      );
      setSelectedFrequency(filteredFrequency);
    } else {
      setSelectedFrequency((prev) => [...prev, frenquecy]);
    }
  }

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const dataFormatted = new Date(item.date);
      const month = String(dataFormatted.getMonth() + 1);
      const year = String(dataFormatted.getFullYear());

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const response = filteredData.map((item, index) => ({
      id: String(index + Math.random() * data.length),
      description: item.description,
      type: item.type,
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      amountFormatted: formatCurrency(Number(item.amount)),
      tagColor: item.frequency === 'recurrent' ? '#F7931B' : '#4E41F0',
    }));

    setListData(response);
  }, [monthSelected, yearSelected, data, selectedFrequency]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={(e) => setYearSelected(e.target.value)}
        />
      </ContentHeader>

      <Filters>
        <button
          type='button'
          className={`tag-filter tag-recurrent ${
            selectedFrequency.includes('recurrent') && 'tag-actived'
          }`}
          onClick={() => handleSelectSpent('recurrent')}
        >
          Recurrent
        </button>
        <button
          type='button'
          className={`tag-filter tag-possible ${
            selectedFrequency.includes('possible') && 'tag-actived'
          }`}
          onClick={() => handleSelectSpent('possible')}
        >
          Possible
        </button>
      </Filters>

      <Content>
        {listData.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            title={item.description}
            tagColor={item.tagColor}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
