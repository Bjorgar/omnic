import BoxSVG from '@src/assets/box.svg';
import LamaSVG from '@src/assets/lama.svg';
import PostboxSVG from '@src/assets/postbox.svg';
import styled from 'styled-components';

export const ButtonText = styled.h2`
  width: 225px;
`;

export const Lama = styled(LamaSVG)`
  position: absolute;
  left: -10px;
  bottom: 0;
  z-index: 2;
`;

export const Postbox = styled(PostboxSVG)`
  position: absolute;
  right: 15px;
  bottom: 0;
  z-index: 1;
`;

export const Box = styled(BoxSVG)`
  position: absolute;
  bottom: 0;
  right: 33px;
  z-index: 3;
`;
