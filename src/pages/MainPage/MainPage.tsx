import { useCaution } from '@src/hooks/useCaution';

import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';

import {
  Heading1,
  Heading2,
  MainPageButtons,
} from './styled';

export default function MainPage() {
  useCaution();
  return (
    <>
      <Heading1>Приветствуем Вас!</Heading1>
      <Heading2>Что будем отправлять сегодня?</Heading2>
      <MainPageButtons>
        <LeftButton />
        <RightButton />
      </MainPageButtons>
    </>
  );
}
