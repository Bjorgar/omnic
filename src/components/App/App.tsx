import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router-dom';
import BoxingPage from '@src/pages/BoxingPage';
import CellsPage from '@src/pages/CellsPage';
import { selectCellsFetchInfo } from '@src/pages/CellsPage/slice';
import MainPage from '@src/pages/MainPage';
import { GlobalStyle } from '@src/theme/global';
import { theme } from '@src/theme/theme';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import LoadIndicator from '../LoadIndicator';
import Wrapper from '../Wrapper';
import { useAppControl } from './hooks/useAppControl';
import { selectDeviceFetchInfo } from './slice';

const InstructionPage = lazy(() => import('@src/pages/InstructionPage'));
const CautionPage = lazy(() => import('@src/pages/CautionPage'));
const ErrorPage = lazy(() => import('@src/pages/ErrorPage'));

export default function App(): JSX.Element {
  useAppControl();

  const { status: cellsFetchStatus } = useSelector(selectCellsFetchInfo);
  const { status: deviceFetchStatus } = useSelector(selectDeviceFetchInfo);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary
        fallback={<ErrorPage />}
      >
        <Header />
        <Wrapper>
          {/* { (cellsFetchStatus === 'loading'
            || deviceFetchStatus === 'loading') && (
            <LoadIndicator size="xxl" />
          )} */}
          <Suspense>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="boxing/" element={<BoxingPage />} />
              <Route path="boxing/cells" element={<CellsPage />} />
              <Route path="instruction" element={<InstructionPage />} />
              <Route path="caution" element={<CautionPage />} />
            </Routes>
          </Suspense>
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
