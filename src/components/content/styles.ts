import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  padding: 25px;

  /* to show just 100vh minus header height */
  height: calc(100vh - 70px);
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
