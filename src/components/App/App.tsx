import { GlobalStyle } from '@src/theme/global';
import { theme } from '@src/theme/theme';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Wrapper from '../Wrapper';
import { useRoutes } from './hooks/useRoutes';

export default function App(): JSX.Element {
  const routes = useRoutes();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        {routes}
      </Wrapper>
    </ThemeProvider>
  );
}
