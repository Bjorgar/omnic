import { useEffect, useState } from 'react';
import { useFetch } from '@src/hooks/useFetch';

import { ALL_CELLS } from '../constants';
import { getCellsInfo, selectCellsFetchInfo, selectCellsTypes } from '../slice';
import { CellParams } from '../types';
import { transformCellsData } from '../utils/transformCellsData';

export function useAvailableCells() {
  const [allCells, setAllCells] = useState(ALL_CELLS);

  const { data, info: { error, status } } = useFetch({
    action: getCellsInfo,
    dataSelector: selectCellsTypes,
    fetchInfoSelector: selectCellsFetchInfo,
  });

  function checkAvailableCells(cellsParams: CellParams[]): void {
    ALL_CELLS.forEach((cell) => {
      const { params } = cell;
      const isEqual = cellsParams.some(({ height, width }) => (
        height === params.height && width === params.width
      ));

      if (isEqual) cell.isAvailable = true;
    });

    setAllCells(ALL_CELLS);
  }

  useEffect(() => {
    if (!data) return;
    const cellsParams = transformCellsData(data);
    checkAvailableCells(cellsParams);
  }, [data]);

  return {
    allCells,
    error,
    status,
  };
}
