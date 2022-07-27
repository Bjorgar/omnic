import {
  Heading2 as BaseHeading2,
  Paragraph as BaseParagraph,
} from '@src/theme/pagesElements';
import styled from 'styled-components';

export const Heading2 = styled(BaseHeading2)`
  margin-bottom: ${({ theme }): string => theme.spacing(2)}; 
`;

export const Paragraph = styled(BaseParagraph)`
  text-align: center;
  margin-bottom: ${({ theme }): string => theme.spacing(3)}; 
`;
