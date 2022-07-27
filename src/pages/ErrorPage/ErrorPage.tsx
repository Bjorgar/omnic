import { ErrorPageProps } from './types';

import { ErrorMessage, Status } from './styled';

export default function ErrorPage({ error }: ErrorPageProps): JSX.Element {
  return (
    <>
      <ErrorMessage>
        Oops! something went terribly wrong..
      </ErrorMessage>
      <Status>
        {error}
      </Status>
    </>
  );
}
