import LinkWithSearch from '@src/components/LinkWithSearch';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonDirection, WrapperProps } from './types';

const applyBackgroundColor = ({
  theme,
  direction,
}: WrapperProps): FlattenSimpleInterpolation => {
  const backgroundColor = direction === ButtonDirection.next
    ? theme.palette.secondary[50]
    : theme.palette.primary[90];
  return css`
    background-color: ${backgroundColor};
  `;
};

export const Wrapper = styled(LinkWithSearch)`
  display: block;
  ${applyBackgroundColor};
  position: relative;
  padding: 15px;
  width: 335px;
  height: 228px;
  border-radius: ${({ theme }): string => theme.shape.borderRadius.l};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: ${({ theme }): string => theme.palette.grey[0]};
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
    font-size: 18px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.xxs}) {
    width: 305px;
  }
`;
