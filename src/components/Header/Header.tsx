import { useSelector } from 'react-redux';
import { selectDeviceId } from '@src/pages/MainPage/slice';

import LinkWithSearch from '../LinkWithSearch';
import LoadIndicator from '../LoadIndicator';

import {
  DeviceId,
  InfoLink,
  InfoWrapper,
  Logo,
  Nav,
} from './styled';

export default function Header() {
  const deviceId = useSelector(selectDeviceId);

  const displayedData = deviceId
    ? `Постомат № ${deviceId}`
    : <LoadIndicator size="m" />;

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
          {displayedData}
        </DeviceId>
      </InfoWrapper>
    </Nav>
  );
}
