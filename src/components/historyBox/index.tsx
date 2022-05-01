import React from 'react';
import {
  ChartContainer,
  Container,
  Header,
  Legend,
  LegendContainer,
} from './styles';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

interface IHistoryBoxProps {
  data: {
    month: string;
    amountInflow: number;
    amountOutflow: number;
  }[];
  lineColorAmountInflow: string;
  lineColorAmountOutflow: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountInflow,
  lineColorAmountOutflow,
}) => (
  <Container>
    <Header>
      <h2>History balance</h2>
      <LegendContainer>
        <Legend color={lineColorAmountInflow}>
          <div></div>
          <span>Inflow</span>
        </Legend>
        <Legend color={lineColorAmountOutflow}>
          <div></div>
          <span>Outflow</span>
        </Legend>
      </LegendContainer>
    </Header>
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
          <XAxis dataKey='month' stroke='#cecece' />
          <Tooltip
            formatter={(value: unknown) => formatCurrency(Number(value))}
          />
          <Line
            type='monotone'
            dataKey='amountInflow'
            name='inflow'
            stroke={lineColorAmountInflow}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='amountOutflow'
            name='outflow'
            stroke={lineColorAmountOutflow}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </Container>
);

export default HistoryBox;
