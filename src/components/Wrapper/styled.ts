import styled from 'styled-components';

export const Paper = styled.main`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(7)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
