import { WrapperPops } from './types';

import { Paper } from './styled';

export default function Wrapper({ children }: WrapperPops) {
  return (
    <Paper>{children}</Paper>
  );
}
