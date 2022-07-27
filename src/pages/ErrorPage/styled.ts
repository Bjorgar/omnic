import { Heading1 } from '@src/theme/pagesElements';
import styled from 'styled-components';

export const ErrorMessage = styled(Heading1)`
  margin-bottom: ${({ theme: { spacing } }): string => spacing(4)};
`;

export const Status = styled(Heading1)`
  color: ${({ theme }): string => theme.palette.primary[90]};
  font-size: 72px;
`;
