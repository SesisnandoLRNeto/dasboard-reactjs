import React, { useState, useMemo } from 'react';
import ContentHeader from '../../components/contentHeader';
import MessageBox from '../../components/messageBox';
import SelectInput from '../../components/selectInput';
import WalletBox from '../../components/walletBox';
import expensives from '../../repositories/expensives';
import gains from '../../repositories/gains';
import monthEnum from '../../utils/months';

import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';

import { Container, Content } from './styles';
import PieChartComponent from '../../components/pieChart';
import HistoryBox from '../../components/historyBox';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const months = useMemo(() => {
    return monthEnum.map((month, index) => ({
      value: index + 1,
      label: month,
    }));
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expensives, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map((year) => ({ value: year, label: year }));
  }, []);

  const totalExpenses = useMemo(() => {
    return expensives.reduce((total, item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
      return total;
    }, 0);
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    return gains.reduce((total, item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
      return total;
    }, 0);
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Its wrong',
        description: 'On this month you expensive more than your gains',
        footerText: 'Check your expensives and try cut costs unecessary',
        icon: sad,
      };
    } else if (totalBalance === 0) {
      return {
        title: 'WOW!',
        description: 'On this month you expensive exactly your gains value',
        footerText: 'Warning and try save some cash to the next one',
        icon: grinning,
      };
    } else {
      return {
        title: 'Nice job!',
        description: 'On this month you still with balance positive',
        footerText: 'You could think about investiments',
        icon: happy,
      };
    }
  }, [totalBalance]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalExpenses + totalGains;
    const gainsPercent = totalGains ? (totalGains / total) * 100 : 0;
    const expensivesPercent = totalExpenses ? (totalExpenses / total) * 100 : 0;

    const data = [
      {
        name: 'gain',
        value: totalGains,
        percent: gainsPercent.toFixed(1),
        color: '#4E41F0',
      },
      {
        name: 'expenses',
        value: totalExpenses,
        percent: expensivesPercent.toFixed(1),
        color: '#F7931B',
      },
    ];

    return data;
  }, [totalExpenses, totalGains]);

  const dataToHistoryChart = useMemo(() => {
    return monthEnum
      .map((_, month) => {
        let amountInflow = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = String(date.getFullYear());

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountInflow += Number(gain.amount);
            } catch {
              throw new Error('amountInflow is invalid');
            }
          }
        });

        let amountOutflow = 0;
        expensives.forEach((expensive) => {
          const date = new Date(expensive.date);
          const expensiveMonth = date.getMonth();
          const expensiveYear = String(date.getFullYear());

          if (expensiveMonth === month && expensiveYear === yearSelected) {
            try {
              amountOutflow += Number(expensive.amount);
            } catch {
              throw new Error('amountOutflow is invalid');
            }
          }
        });

        return {
          monthNumber: month,
          month: monthEnum[month].substring(0, 3),
          amountInflow,
          amountOutflow,
        };
      })
      .filter((item) => item.amountInflow > 0 && item.amountOutflow > 0);
  }, [yearSelected]);

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
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

      <Content>
        <WalletBox
          title='Balance'
          icon='dolar'
          amount={totalBalance}
          color='#4E41F0'
          footerLabel='It is the amount based in inflow and outflow values'
        />
        <WalletBox
          title='Inflows'
          icon='arrowUp'
          amount={totalGains}
          color='#F7931B'
          footerLabel='It is the amount based in inflow values'
        />
        <WalletBox
          title='Outflows'
          icon='arrowDown'
          amount={totalExpenses}
          color='#E44C4E'
          footerLabel='It is the amount based in outflow values'
        />
        <MessageBox
          title={message?.title}
          description={message?.description}
          footerText={message?.footerText}
          icon={message?.icon}
        ></MessageBox>

        <PieChartComponent data={relationExpensesVersusGains} />
        <HistoryBox
          lineColorAmountInflow='#F7931B'
          lineColorAmountOutflow='#E44C4E'
          data={dataToHistoryChart}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
