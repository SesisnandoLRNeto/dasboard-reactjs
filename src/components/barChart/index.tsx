import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartComponent: React.FC<IBarChartProps> = ({ title, data }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>

      <LegendContainer>
        {data.map((value) => (
          <Legend key={value.name} color={value.color}>
            <div>{value.percent}</div>
            <span>{value.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey='amount'>
            {data.map((value) => (
              <Cell key={value.name} fill={value.color} cursor='pointer' />
            ))}
          </Bar>
          <Tooltip
            formatter={(value: unknown) => formatCurrency(Number(value))}
          />
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default BarChartComponent;
