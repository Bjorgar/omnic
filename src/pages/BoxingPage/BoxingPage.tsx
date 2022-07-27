/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import Box from '@src/assets/full-box.svg';
import Button from '@src/components/Button';
import { useCaution } from '@src/hooks/useCaution';
import { Heading2 } from '@src/theme/pagesElements';

import {
  ButtonsWrapper,
  InfoWrapper,
  Li,
  Ol,
} from './styled';

export default function BoxingPage(): JSX.Element {
  const navigate = useNavigate();
  useCaution();

  return (
    <>
      <Heading2>
        Отправление должно быть надежно упаковано
      </Heading2>
      <InfoWrapper>
        <Box />
        <Ol>
          <Li>
            Упакуйте товар в коробку или пакет. На упаковке не должно быть посторонних стикеров и этикеток;
          </Li>
          <Li>
            Заклейте упаковку скотчем, чтобы не было доступа к вложенным предметам;
          </Li>
        </Ol>
      </InfoWrapper>
      <ButtonsWrapper>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
        <Button
          to="cells"
          variant="contained"
        >
          Я ХОРОШО УПАКОВАЛ
        </Button>
      </ButtonsWrapper>
    </>
  );
}
