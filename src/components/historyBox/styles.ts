import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;
`;
export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-left: 7px;
  padding-right: 16px;
  font-size: 14px;

  > div {
    background-color: ${(props) => props.color};

    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 12px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`;
export const LegendContainer = styled.ul`
  list-style: none;

  display: flex;

  height: 175px;
  padding-right: 15px;
  overflow-y: scroll;

  /* scrollbar width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* scrollbar inside */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  /* scrollbar outside */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const ChartContainer = styled.div`
  height: 400px;
  flex: 1;
`;
