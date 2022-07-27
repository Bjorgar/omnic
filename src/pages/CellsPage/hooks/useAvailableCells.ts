import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTypeDispatch } from '@src/store/store';

import { ALL_CELLS } from '../constants';
import {
  getCellsInfo,
  selectCellsTypes,
} from '../slice';
import { CellParams } from '../types';
import { transformCellsData } from '../utils/transformCellsData';

export function useAvailableCells() {
  const [checkedCells, setCheckedCells] = useState(ALL_CELLS);
  const [searchParams] = useSearchParams();
  const data = useSelector(selectCellsTypes);
  const dispatch = useTypeDispatch();
  const uid = searchParams.get('device_uid') || '';

  function checkAvailableCells(cellsParams: CellParams[]): void {
    ALL_CELLS.forEach((cell) => {
      const { params } = cell;
      const isEqual = cellsParams.some(({ height, width }) => (
        height === params.height && width === params.width
      ));

      if (isEqual) cell.isAvailable = true;
    });

    setCheckedCells(ALL_CELLS);
  }

  useEffect(() => {
    if (!data && uid) {
      dispatch(getCellsInfo(uid));
    } else if (data) {
      const cellsParams = transformCellsData(data);
      checkAvailableCells(cellsParams);
    }
  }, [data, uid, dispatch]);

  return { checkedCells };
}
