import styled, {
  css, DefaultTheme, FlattenInterpolation, ThemeProps,
} from 'styled-components';

import { CellBoxProps } from './types';

const applyCellBoxStyle = ({
  isUnavailable,
  isSelected,
}: CellBoxProps): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  if (isUnavailable) {
    return css`
      cursor: default;
      pointer-events: none;
      box-shadow: 0px 0px 6px ${({ theme }): string => theme.palette.error};
    `;
  }
  if (isSelected) {
    return css`
      box-shadow: 0px 0px 6px
        ${({ theme }): string => theme.palette.primary[40]};
    `;
  }

  return css`
    box-shadow: 0px 0px 6px rgba(85, 115, 133, 0.4);
  `;
};

export const Paper = styled.div``;

export const ButtonsWrapper = styled.div`
  margin-top: ${({ theme: { spacing } }): string => spacing(3)};
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    flex-direction: column;
    gap: ${({ theme: { spacing } }): string => spacing(3)}
  }
`;

export const SizesWrapper = styled.div`
  display: grid;
  grid-gap: 18px;
  grid-template-columns: 186px 240px 435px;
  grid-template-rows: 80px 34px 80px 130px;
  margin-top: ${({ theme }): string => theme.spacing(6)};

  @media (max-width: ${({ theme }): string => theme.breakpoints.xl}) {
    grid-template-columns: 186px 240px;
    grid-template-rows: 80px 114px 130px 135px 165px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    width: 340px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100px) repeat(2, 130px) 160px 180px;
  }
`;

export const CellBox = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }): string => theme.palette.grey[40]};
  border-radius: ${({ theme }): string => theme.shape.borderRadius.m};
  ${applyCellBoxStyle};

  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  };

  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2 / 4;
  };

  &:nth-child(3) {
    grid-column: 1;
    grid-row: 4;
  };

  &:nth-child(4) {
    grid-column: 2;
    grid-row: 1;
  };

  &:nth-child(5) {
    grid-column: 2;
    grid-row: 2 / 4;
  };

  &:nth-child(6) {
    grid-column: 2;
    grid-row: 4;
  };

  &:nth-child(7) {
    grid-column: 3;
    grid-row: 1 / 3;
  };

  &:nth-child(8) {
    grid-column: 3;
    grid-row: 3 / -1;
  };

  @media (max-width: ${({ theme }): string => theme.breakpoints.xl}) {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    };

    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    };

    &:nth-child(3) {
      grid-column: 1;
      grid-row: 3;
    };

    &:nth-child(4) {
      grid-column: 2;
      grid-row: 1;
    };

    &:nth-child(5) {
      grid-column: 2;
      grid-row: 2;
    };

    &:nth-child(6) {
      grid-column: 2;
      grid-row: 3;
    };

    &:nth-child(7) {
      grid-column: 1 / 3;
      grid-row: 4;
    };

    &:nth-child(8) {
      grid-column: 1 / 3;
      grid-row: 5;
    };
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    };

    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    };

    &:nth-child(3) {
      grid-column: 1;
      grid-row: 3;
    };

    &:nth-child(4) {
      grid-column: 1;
      grid-row: 4;
    };

    &:nth-child(5) {
      grid-column: 1;
      grid-row: 5;
    };

    &:nth-child(6) {
      grid-column: 1;
      grid-row: 6;
    };

    &:nth-child(7) {
      grid-column: 1;
      grid-row: 7;
    };

    &:nth-child(8) {
      grid-column: 1;
      grid-row: 8;
    };
  }
`;

export const SVGWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const CellInfoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CellSize = styled.h3`
  font-size: 16px;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  margin-bottom: ${({ theme }): string => theme.spacing()};
  color: ${({ theme }): string => theme.palette.primary[90]};
`;

export const CellParams = styled.p`
  font-size: 14px;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[400]};
  color: ${({ theme }): string => theme.palette.grey[90]};
`;
