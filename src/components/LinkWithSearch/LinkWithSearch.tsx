import { LinkProps, useLocation } from 'react-router-dom';

import { Link } from './styled';

export default function LinkWithSearch({
  to,
  children,
  ...props
}: LinkProps): JSX.Element {
  const { search } = useLocation();

  return (
    <Link
      to={to + search}
      {...props}
    >
      {children}
    </Link>
  );
}
