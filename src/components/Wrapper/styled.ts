import styled from 'styled-components';

export const Paper = styled.main`
  position: relative;
  margin: ${({ theme }) => theme.spacing(7)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
