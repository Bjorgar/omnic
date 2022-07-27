import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '@src/components/Button';

import { ErrorPageProps } from './types';

import { ErrorMessage, Status } from './styled';

export default function ErrorPage({ error }: ErrorPageProps): JSX.Element {
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function clickHandler() {
    setSearchParams({});
    navigate('/', { replace: true });
  }
  return (
    <>
      <ErrorMessage>
        Oops! something went terribly wrong..
      </ErrorMessage>
      <Status>
        {error}
      </Status>
      <Button
        variant="outlined"
        onClick={clickHandler}
      >
        На главную
      </Button>
    </>
  );
}
