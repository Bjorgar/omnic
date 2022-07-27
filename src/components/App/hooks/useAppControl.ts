import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getDeviceInfo, selectDeviceNumber } from '../slice';

export function useAppControl() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const deviseNumber = useSelector(selectDeviceNumber);

  const uid = searchParams.get('device_uid') || '';

  useEffect(() => {
    if (!deviseNumber && uid) {
      dispatch<any>(getDeviceInfo(uid));
    }
  }, [dispatch, deviseNumber, uid]);
}
