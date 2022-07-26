import styled, { css } from 'styled-components';

const wrapperCommon = css`
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  ${wrapperCommon};
  margin-top: ${({ theme: { spacing } }): string => spacing(8)};

  @media (max-width: ${({ theme }): string => theme.breakpoints.s}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Ol = styled.ol`
  margin-top: ${({ theme: { spacing } }): string => spacing(1.5)};
  font-family: ${({ theme }): string => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[400]};
  font-size: 14px;
  width: 300px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.xxs}) {
    width: 270px;
  }
`;

export const Li = styled.li`
  margin-bottom: ${({ theme: { spacing } }): string => spacing(4)};
  line-height: 1.3;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  ${wrapperCommon};
  margin-top: ${({ theme: { spacing } }): string => spacing(14)};
  padding-left: ${({ theme: { spacing } }): string => spacing(2)};
  padding-right: ${({ theme: { spacing } }): string => spacing(2)};

  @media (max-width: ${({ theme }): string => theme.breakpoints.s}) {
    margin-top: ${({ theme: { spacing } }): string => spacing(8)};
    flex-direction: column;
    gap: ${({ theme: { spacing } }): string => spacing(4)};
    justify-content: flex-start;
    align-items: center;
  }
`;
