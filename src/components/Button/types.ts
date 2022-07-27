import { DefaultTheme } from 'styled-components';

interface ButtonCommon {
  variant: 'contained' | 'outlined';
  children: string;
  isUnavailable?: boolean;
  onClick?: () => void;
}

interface ILink {
  to?: string;
  href?: never;

}

interface IAnchor {
  href?: string;
  to?: never;
}

export type ButtonProps = ButtonCommon & (ILink | IAnchor);

export type ButtonBaseProps = Omit<ButtonCommon,
  | 'children'
  | 'onClick'
  > & {
  theme: DefaultTheme
}
