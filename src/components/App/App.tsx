import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  Route,
  Routes,
} from 'react-router-dom';
import BoxingPage from '@src/pages/BoxingPage';
import CellsPage from '@src/pages/CellsPage';
import MainPage from '@src/pages/MainPage';
import { GlobalStyle } from '@src/theme/global';
import { theme } from '@src/theme/theme';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Wrapper from '../Wrapper';

const InstructionPage = lazy(() => import('@src/pages/InstructionPage'));
const CautionPage = lazy(() => import('@src/pages/CautionPage'));
const ErrorPage = lazy(() => import('@src/pages/ErrorPage'));

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary
        fallback={<ErrorPage />}
      >
        <Header />
        <Wrapper>
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
