import {
  Route,
  Routes,
} from 'react-router-dom';
import AttentionPage from '@src/pages/AttentionPage';
import BoxingPage from '@src/pages/BoxingPage';
import CellsPage from '@src/pages/CellsPage';
import InstructionPage from '@src/pages/InstructionPage';
import MainPage from '@src/pages/MainPage';
import { GlobalStyle } from '@src/theme/global';
import { theme } from '@src/theme/theme';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Wrapper from '../Wrapper';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boxing" element={<BoxingPage />} />
          <Route path="/boxing/cells" element={<CellsPage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/caution" element={<AttentionPage />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}
