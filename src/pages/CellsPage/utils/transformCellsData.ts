import { CellParams, CellType } from '../types';

export function transformCellsData(data: CellType[]): CellParams[] {
  return data.reduce<CellParams[]>((acc, { params }) => [...acc, {
    height: params.height,
    width: params.width,
  }], []);
}
