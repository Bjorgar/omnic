import { LinkProps } from 'react-router-dom';

import { Wrapper } from './styles';
import { ButtonPaperProps } from './types';

export default function ButtonPaper({
  children,
  direction,
  ...otherProps
}: ButtonPaperProps & LinkProps) {
  return (
    <Wrapper
      direction={direction}
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
}
