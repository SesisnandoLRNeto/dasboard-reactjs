import CountUp from 'react-countup';
import { Container } from './styles';

import dolar from '../../assets/dolar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
  title: string;
  amount: number;
  color: string;
  footerLabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  color,
  icon,
  footerLabel,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case 'dolar':
        return dolar;
      case 'arrowUp':
        return arrowUp;
      case 'arrowDown':
        return arrowDown;
    }
  };

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={'R$ '}
          separator='.'
          decimal=','
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default WalletBox;
