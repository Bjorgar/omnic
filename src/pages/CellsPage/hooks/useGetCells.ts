import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTypeDispatch } from '@src/store/store';

import {
  getCellsInfo,
  selectCellsTypes,
} from '../slice';

export function useGetCells() {
  const [searchParams] = useSearchParams();
  const dispatch = useTypeDispatch();
  const uid = searchParams.get('device_uid') || '';
  const data = useSelector(selectCellsTypes);

  useEffect(() => {
    if (data || !uid) return;
    dispatch(getCellsInfo(uid));
  }, [uid, dispatch, data]);
}
