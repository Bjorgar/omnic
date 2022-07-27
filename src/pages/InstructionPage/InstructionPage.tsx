import { useNavigate } from 'react-router-dom';
import Button from '@src/components/Button';

import { Heading1 } from '../MainPage/styled';
import { Li, Ol } from './styled';

export default function InstructionPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Heading1>
        Инструкция
      </Heading1>
      <Ol>
        <Li>Сделайте этот шаг</Li>
        <Li>Затем этот</Li>
        <Li>Не забудьте об этом</Li>
        <Li>Вы почти у цели</Li>
        <Li>Последний шаг</Li>
        <Li>Вы прекрасны :)</Li>
      </Ol>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>
    </>
  );
}
