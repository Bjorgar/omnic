import LamaBigSVG from '@src/assets/lama-big.svg';
import ShopSVG from '@src/assets/shop.svg';
import styled from 'styled-components';

export const ButtonText = styled.h2`
  text-align: center;;
`;

export const LamaBig = styled(LamaBigSVG)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const Shop = styled(ShopSVG)`
  position: absolute;
  bottom: 24px;
  right: 0;
`;
