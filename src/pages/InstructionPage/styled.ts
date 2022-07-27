import styled from 'styled-components';

export const Ol = styled.ol`
  margin: ${({ theme }): string => theme.spacing(3)} 0;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[400]};
  font-size: 20px;
`;

export const Li = styled.li`
  margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
`;
