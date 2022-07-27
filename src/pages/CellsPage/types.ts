import { FC, SVGProps } from 'react';

interface Params {
  depth: number;
  height: number;
  label: string;
  width: number;
}

export interface CellType {
  has_empty: boolean;
  type: string;
  params: Params;
}

export interface CellsResponseData {
  cell_types: CellType[];
  device_uid: string;
}

export type CellParams = Omit<Params, 'depth' | 'label'>;

export interface CellBoxProps {
  isUnavailable: boolean;
  isSelected: boolean;
}

export interface Cell {
  size: string;
  image: FC<SVGProps<SVGSVGElement>>;
  isAvailable: boolean;
  params: {
    width: number;
    height: number;
  };
}
