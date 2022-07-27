import ButtonPaper from '../ButtonPaper';
import { ButtonDirection } from '../ButtonPaper/types';

import { ButtonText, LamaBig, Shop } from './styled';

export default function RightButton() {
  return (
    <ButtonPaper
      direction={ButtonDirection.next}
      to="/"
    >
      <ButtonText>Возврат в интернет магазин</ButtonText>
      <LamaBig />
      <Shop />
    </ButtonPaper>
  );
}
