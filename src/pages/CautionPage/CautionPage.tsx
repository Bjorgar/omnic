import { useNavigate } from 'react-router-dom';
import Button from '@src/components/Button';

import { QUERY_KEY, QUERY_VALUE } from './constants';

import { Heading2, Paragraph } from './styled';

export default function CautionPage() {
  const navigate = useNavigate();

  function clickHandler(): void {
    navigate(`/?${QUERY_KEY}=${QUERY_VALUE}`, { replace: true });
  }

  return (
    <>
      <Heading2>
        Не установлен qery параметр в ссылке.
      </Heading2>
      <Paragraph>
        Нажмите кнопку ниже, чтобы установить тестовый query параметр <br />
        и вернуться на предыдущую страницу.
      </Paragraph>
      <Button
        variant="contained"
        onClick={clickHandler}
      >
        Сделать это
      </Button>
    </>
  );
}
