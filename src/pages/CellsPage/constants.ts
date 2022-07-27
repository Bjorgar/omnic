import L_SVG from '@src/assets/cells/l.svg';
import M_SVG from '@src/assets/cells/m.svg';
import S_SVG from '@src/assets/cells/s.svg';
import XL_SVG from '@src/assets/cells/xl.svg';
import XS_SVG from '@src/assets/cells/xs.svg';
import XXL_SVG from '@src/assets/cells/xxl.svg';
import XXS_SVG from '@src/assets/cells/xxs.svg';
import XXXL_SVG from '@src/assets/cells/xxxl.svg';

import { Cell } from './types';

export const ALL_CELLS: Cell[] = [
  {
    size: 'XXS',
    image: XXS_SVG,
    isAvailable: false,
    params: {
      width: 205,
      height: 110,
    },
  },
  {
    size: 'XS',
    image: XS_SVG,
    isAvailable: false,
    params: {
      width: 205,
      height: 160,
    },
  },
  {
    size: 'S',
    image: S_SVG,
    isAvailable: false,
    params: {
      width: 385,
      height: 110,
    },
  },
  {
    size: 'M',
    image: M_SVG,
    isAvailable: false,
    params: {
      width: 205,
      height: 210,
    },
  },
  {
    size: 'L',
    image: L_SVG,
    isAvailable: false,
    params: {
      width: 385,
      height: 160,
    },
  },
  {
    size: 'XL',
    image: XL_SVG,
    isAvailable: false,
    params: {
      width: 385,
      height: 210,
    },
  },
  {
    size: 'XXL',
    image: XXL_SVG,
    isAvailable: false,
    params: {
      width: 646,
      height: 210,
    },
  },
  {
    size: 'XXXL',
    image: XXXL_SVG,
    isAvailable: false,
    params: {
      width: 636,
      height: 360,
    },
  },
];
