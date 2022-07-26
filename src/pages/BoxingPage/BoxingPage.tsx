/* eslint-disable max-len */
import Box from '@src/assets/full-box.svg';
import Button from '@src/components/Button';
import { useAttention } from '@src/hooks/useAttention';
import { Heading2 } from '@src/theme/pagesElements';

import {
  ButtonsWrapper,
  InfoWrapper,
  Li,
  Ol,
} from './styled';

export default function BoxingPage(): JSX.Element {
  useAttention();

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
          to="/"
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
