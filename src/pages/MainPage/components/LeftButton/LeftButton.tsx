import ButtonPaper from '../ButtonPaper';
import { ButtonDirection } from '../ButtonPaper/types';

import {
  Box,
  ButtonText,
  Lama,
  Postbox,
} from './styled';

export default function LeftButton() {
  return (
    <ButtonPaper
      direction={ButtonDirection.back}
      to="/boxing"
    >
      <ButtonText>Отправить посылку через постамат</ButtonText>
      <Lama />
      <Postbox />
      <Box />
    </ButtonPaper>
  );
}
