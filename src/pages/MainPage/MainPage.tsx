import { useFetch } from '@src/hooks/useFetch';

import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';
import {
  getDeviceInfo,
  selectDeviceFetchInfo,
  selectDeviceNumber,
} from './slice';

import {
  Heading1,
  Heading2,
  MainPageButtons,
} from './styled';

export default function MainPage() {
  const { info: { error, status } } = useFetch({
    action: getDeviceInfo,
    dataSelector: selectDeviceNumber,
    fetchInfoSelector: selectDeviceFetchInfo,
  });

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
