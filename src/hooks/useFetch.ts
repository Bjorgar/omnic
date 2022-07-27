import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { RootReducers } from '@src/store/store';

interface UseFetchArgs<A, S, I> {
  action: A;
  dataSelector: S;
  fetchInfoSelector: I;
}

export function useFetch<
  A extends(uid: string) => void,
  S extends (state: RootReducers) => ReturnType<S>,
  I extends (state: RootReducers) => ReturnType<I>,
>({
  action,
  dataSelector,
  fetchInfoSelector,
}: UseFetchArgs<A, S, I>) {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(dataSelector);
  const info = useSelector(fetchInfoSelector);
  const uid = searchParams.get('device_uid') || '';

  useEffect(() => {
    if (!uid) {
      navigate('/caution', {
        state: pathname,
      });
      return;
    }
    if (data) return;

    dispatch<any>(action(uid));
  }, [action, data, pathname, dispatch, navigate, uid]);

  return {
    data,
    info,
  };
}
