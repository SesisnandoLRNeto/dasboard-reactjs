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

export interface IListData {
  id: string;
  description: string;
  type: string;
  frequency: string;
  amountFormatted: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { type } = useParams();
  const [listData, setListData] = useState<IListData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const { title, lineColor, data } = useMemo(() => {
    return type === 'income'
      ? { title: 'Income', lineColor: '#F7931B', data: gains }
      : { title: 'Spent', lineColor: '#E44C4E', data: expensives };
  }, [type]);

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'Febuary' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
  ];
  const years = [
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
  ];

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const dataFormatted = new Date(item.date);
      const month = String(dataFormatted.getMonth() + 1);
      const year = String(dataFormatted.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const response = filteredData.map((item, index) => ({
      id: String(index + 1),
      description: item.description,
      type: item.type,
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      amountFormatted: formatCurrency(Number(item.amount)),
      tagColor: item.frequency === 'recorrent' ? '#F7931B' : '#4E41F0',
    }));

    setListData(response);
  }, [monthSelected, yearSelected, data]);

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
        <button type='button' className='tag-filter tag-recurrent'>
          Recurrent
        </button>
        <button type='button' className='tag-filter tag-possible'>
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
