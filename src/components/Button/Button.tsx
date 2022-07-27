import { ReactNode } from 'react';

import LinkWithSearch from '../LinkWithSearch';
import { ButtonProps } from './types';

import { A, ButtonBase } from './styled';

export default function Button({
  to,
  href,
  variant,
  children,
  isUnavailable,
  onClick,
}: ButtonProps): JSX.Element {
  const element = (): ReactNode => {
    const buttonBase = (
      <ButtonBase
        onClick={onClick}
        variant={variant}
        isUnavailable={isUnavailable}
      >
        {children}
      </ButtonBase>
    );

    if (to) {
      return (
        <LinkWithSearch to={to}>
          {buttonBase}
        </LinkWithSearch>
      );
    }
    if (href) {
      return (
        <A href={href}>
          {buttonBase}
        </A>
      );
    }
    return buttonBase;
  };

  return <>{element()}</>;
}
