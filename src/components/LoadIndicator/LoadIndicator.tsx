import { IndicatorProps } from './types';

import { Loading, LoadingWrapper } from './styled';

export default function LoadIndicator({ size }: IndicatorProps): JSX.Element {
  return size === 'm'
    ? <Loading size={size} />
    : (
      <LoadingWrapper>
        <Loading size={size} />
      </LoadingWrapper>
    );
}
