import { useRoutes as useBaseRoutes } from 'react-router-dom';
import AttentionPage from '@src/pages/AttentionPage';
import BoxingPage from '@src/pages/BoxingPage';
import CellsPage from '@src/pages/CellsPage';
import InstructionPage from '@src/pages/InstructionPage';
import MainPage from '@src/pages/MainPage';

export function useRoutes() {
  return useBaseRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path: 'boxing',
          element: <BoxingPage />,
          children: [
            {
              path: 'cells',
              element: <CellsPage />,
            },
          ],
        },
        {
          path: 'instruction',
          element: <InstructionPage />,
        },
        {
          path: 'attention',
          element: <AttentionPage />,
        },
      ],
    },
  ]);
}
