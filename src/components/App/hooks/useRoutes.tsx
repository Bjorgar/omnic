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
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: 'boxing',
          children: [
            {
              index: true,
              element: <BoxingPage />,
            },
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
