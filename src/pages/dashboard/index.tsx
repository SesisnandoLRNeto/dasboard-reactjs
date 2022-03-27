import React from 'react';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/selectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Nando', label: 'Nando' },
    { value: 'Sesis', label: 'Sesis' },
  ];

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
