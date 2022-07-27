import { useSelector } from 'react-redux';
import Logo from '@src/assets/logo.svg';
import { selectDeviceNumber } from '@src/pages/MainPage/slice';

import LinkWithSearch from '../LinkWithSearch';

import {
  DeviceNumber, InfoLink, InfoWrapper, Nav,
} from './styled';

export default function Header() {
  const deviceNumber = useSelector(selectDeviceNumber);

  return (
    <Nav>
      <LinkWithSearch to="/">
        <Logo />
      </LinkWithSearch>
      <InfoWrapper>
        <InfoLink to="instruction">
          Инструкция
        </InfoLink>
        <DeviceNumber>
          Постомат № {deviceNumber}
        </DeviceNumber>
      </InfoWrapper>
    </Nav>
  );
}
