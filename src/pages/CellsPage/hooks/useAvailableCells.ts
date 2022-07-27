import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ALL_CELLS } from '../constants';
import {
  selectCellsTypes, selectCheckedInfo, setIsCellsChecked,
} from '../slice';
import { CellParams } from '../types';
import { transformCellsData } from '../utils/transformCellsData';

export function useAvailableCells() {
  const [checkedCells, setCheckedCells] = useState(ALL_CELLS);

  const data = useSelector(selectCellsTypes);
  const isChecked = useSelector(selectCheckedInfo);

  function checkAvailableCells(cellsParams: CellParams[]): void {
    ALL_CELLS.forEach((cell) => {
      const { params } = cell;
      const isEqual = cellsParams.some(({ height, width }) => (
        height === params.height && width === params.width
      ));

      if (isEqual) cell.isAvailable = true;
    });
    setCheckedCells([...ALL_CELLS]);
    setIsCellsChecked();
  }

  useEffect(() => {
    if (!data || isChecked) return;
    const cellsParams = transformCellsData(data);
    checkAvailableCells(cellsParams);
  }, [data, isChecked]);

  return { checkedCells };
}
