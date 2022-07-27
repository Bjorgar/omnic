import styled, { css } from 'styled-components';

export const textCommon = css`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: ${({ theme }) => theme.palette.grey[90]};
`;

export const Heading1 = styled.h1`
  ${textCommon};
  font-size: 32px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  ${textCommon};
  font-size: 24px;
  text-align: center;
`;

export const Paragraph = styled.p`
  ${textCommon};
  font-size: 20px;
`;
