import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  Container,
  Legend,
  LegendContainer,
  SideLeft,
  SideRight,
} from './styles';

interface IPieChartProps {
  data: {
    value: number;
    name: string;
    percent: string;
    color: string;
  }[];
}

const PieChartComponent: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <LegendContainer>
        {data.map((item) => (
          <Legend key={item.name} color={item.color}>
            <div>{item?.percent}</div>
            <span>{item?.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey='value'>
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </Container>
);

export default PieChartComponent;
