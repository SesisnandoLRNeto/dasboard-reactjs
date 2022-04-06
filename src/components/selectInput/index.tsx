import React from 'react';
import { Container } from './styles';

interface IOption {
  value: string | number;
  label: string | number;
}
interface ISelectInputProps {
  options: IOption[];
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option: IOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
