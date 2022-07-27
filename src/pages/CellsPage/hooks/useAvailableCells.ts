import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypeDispatch } from '@src/store/store';

import { ALL_CELLS } from '../constants';
import {
  getCellsInfo, selectCellsTypes, selectCheckedCells, setCheckedCells,
} from '../slice';
import { CellParams } from '../types';
import { transformCellsData } from '../utils/transformCellsData';

export function useAvailableCells() {
  const data = useSelector(selectCellsTypes);
  const checkedCells = useSelector(selectCheckedCells);
  const dispatch = useTypeDispatch();

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
    if (data && !checkedCells) {
      const cellsParams = transformCellsData(data);
      checkAvailableCells(cellsParams);
    } else if (!checkedCells) {
      dispatch<any>(getCellsInfo);
    }
  }, [data, dispatch, checkedCells]);

  return { checkedCells };
}
