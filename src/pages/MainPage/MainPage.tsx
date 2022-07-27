import { useSelector } from 'react-redux';
import LoadIndicator from '@src/components/LoadIndicator';
import { useCaution } from '@src/hooks/useCaution';

import ErrorPage from '../ErrorPage';
import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';
import { useGetDeviceInfo } from './hooks/useGetDeviceInfo';
import { selectDeviceFetchInfo } from './slice';

import {
  Heading1,
  Heading2,
  MainPageButtons,
} from './styled';

export default function MainPage() {
  useGetDeviceInfo();
  useCaution();

  const { error, status } = useSelector(selectDeviceFetchInfo);

  return error ? (
    <ErrorPage error={error} />
  ) : (
    <>
      {status === 'loading' && <LoadIndicator size="xxl" />}
      <Heading1>Приветствуем Вас!</Heading1>
      <Heading2>Что будем отправлять сегодня?</Heading2>
      <MainPageButtons>
        <LeftButton />
        <RightButton />
      </MainPageButtons>
    </>
  );
}
