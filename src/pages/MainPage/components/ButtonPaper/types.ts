import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export enum ButtonDirection {
  next,
  back,
}

export interface ButtonPaperProps {
  children: ReactNode;
  direction: ButtonDirection;
}

export interface WrapperProps {
  direction: ButtonDirection;
  theme: DefaultTheme;
}
