import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  min-height: 260px;

  display: flex;

  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 7px;
`;
export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2 {
    margin-bottom: 10px;
  }
`;
export const SideRight = styled.main`
  display: flex;
  justify-content: center;

  width: 60%;
  min-height: 150px;
  padding-top: 35px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  padding-left: 16px;

  font-size: 14px;

  > div {
    background-color: ${(props) => props.color};

    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`;
export const LegendContainer = styled.ul`
  list-style: none;

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
