import styled, {
  css, DefaultTheme, FlattenInterpolation, ThemeProps,
} from 'styled-components';

import { ButtonBaseProps } from './types';

const applyButtonStyle = ({
  variant,
  isUnavailable,
  theme,
}: ButtonBaseProps): FlattenInterpolation<
  ThemeProps<DefaultTheme>> => {
  const grey = theme.palette.grey[40];
  const primaryGreen = theme.palette.primary[90];

  const setColor = () => isUnavailable ? grey : primaryGreen;

  const setHoverEffect = () => (
    isUnavailable
    && css`
        cursor: default;
        &:hover {
          box-shadow: none;
          pointer-events: none;
        }  
      `
  );

  return variant === 'contained'
    ? css`
        background-color: ${setColor};
        color: ${(props): string => props.theme.palette.grey[0]};
        border: none;
        ${setHoverEffect};
      `
    : css`
        background-color: transparent;
        color: ${setColor};
        border: 1px solid ${setColor};
        ${setHoverEffect};
      `;
};

export const ButtonBase = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  border-radius: ${({ theme }): string => theme.shape.borderRadius.s};
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  font-size: 14px;
  padding: ${({ theme: { spacing } }): string => `${spacing(2)} ${spacing(7)}`};
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};

  &:hover {
    box-shadow: 0px 0px 10px
      ${({ theme }): string => theme.palette.primary[40]};
  }

  ${applyButtonStyle}
`;

export const A = styled.a`
  display: contents;
`;
