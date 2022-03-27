import React from 'react';
import ContentHeader from '../../components/contentHeader';
import HistoryFinanceCard from '../../components/historyFinanceCard';
import SelectInput from '../../components/selectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const month = [
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
  ];
  const years = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
  ];

  return (
    <Container>
      <ContentHeader title='Spent' lineColor='#FFF'>
        <SelectInput options={month} />
        <SelectInput options={years} />
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
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
        <HistoryFinanceCard
          title='Energy bill'
          tagColor='#e44c4e'
          subtitle='03/30/2022'
          amount='120.00'
        />
      </Content>
    </Container>
  );
};

export default List;
