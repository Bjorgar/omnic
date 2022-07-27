import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTypeDispatch } from '@src/store/store';

import { getDeviceInfo, selectDeviceId } from '../slice';

export function useGetDeviceInfo() {
  const [searchParams] = useSearchParams();
  const dispatch = useTypeDispatch();
  const deviseNumber = useSelector(selectDeviceId);

  const uid = searchParams.get('device_uid') || '';

  useEffect(() => {
    if (!deviseNumber && uid) {
      dispatch(getDeviceInfo(uid));
    }
  }, [dispatch, deviseNumber, uid]);
}
