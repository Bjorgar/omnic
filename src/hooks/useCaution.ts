import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export function useCaution() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const uid = searchParams.get('device_uid') || '';
  useEffect(() => {
    if (!uid) {
      navigate('/caution', {
        state: pathname,
      });
    }
  }, [pathname, navigate, uid]);
}
