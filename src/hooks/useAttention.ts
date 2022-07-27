import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
  useMatch,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { selectDeviceId } from '@src/pages/MainPage/slice';

export function useAttention() {
  const isMainPage = useMatch('/');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const deviceId = useSelector(selectDeviceId);
  const uid = searchParams.get('device_uid') || '';

  useEffect(() => {
    if (!uid) {
      navigate('/attention');
    } else if (!deviceId && !isMainPage) {
      navigate('/');
    }
  }, [pathname, navigate, uid, deviceId, isMainPage]);
}
