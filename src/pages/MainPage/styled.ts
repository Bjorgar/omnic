import {
  Heading1 as BaseH1,
  Heading2 as BaseH2,
} from '@src/theme/pagesElements';
import styled from 'styled-components';

export const MainPageButtons = styled.main`
  display: flex;
  gap: 60px;
  justify-content: center;
`;

export const Heading1 = styled(BaseH1)`
  margin-bottom: ${({ theme }): string => theme.spacing(2)};
`;

export const Heading2 = styled(BaseH2)`
  margin-bottom: ${({ theme }): string => theme.spacing(7)};
`;
