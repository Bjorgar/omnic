import { useSelector } from 'react-redux';
import Logo from '@src/assets/logo.svg';
import { selectDeviceId } from '@src/pages/MainPage/slice';

import LinkWithSearch from '../LinkWithSearch';

import {
  DeviceId, InfoLink, InfoWrapper, Nav,
} from './styled';

export default function Header() {
  const deviceId = useSelector(selectDeviceId);

  return (
    <Nav>
      <LinkWithSearch to="/">
        <Logo />
      </LinkWithSearch>
      <InfoWrapper>
        <InfoLink to="instruction">
          Инструкция
        </InfoLink>
        <DeviceId>
          Постомат № {deviceId}
        </DeviceId>
      </InfoWrapper>
    </Nav>
  );
}
