import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@src/components/Button';
import LoadIndicator from '@src/components/LoadIndicator';
import { useAttention } from '@src/hooks/useAttention';
import { Heading2 } from '@src/theme/pagesElements';

import ErrorPage from '../ErrorPage';
import { useAvailableCells } from './hooks/useAvailableCells';
import { selectCellsFetchInfo } from './slice';
import { Cell } from './types';

import {
  ButtonsWrapper,
  CellBox,
  CellInfoWrapper,
  CellParams,
  CellSize,
  Paper,
  SizesWrapper,
  SVGWrapper,
} from './styled';

export default function CellsPage() {
  const [selectedCell, setSelectedCell] = useState<Cell>();
  const { checkedCells } = useAvailableCells();
  useAttention();

  const clickHandler = () => {
    // Add some next logic
  };

  const { error, status } = useSelector(selectCellsFetchInfo);

  const selectCell = (cell: Cell): void => {
    setSelectedCell(cell);
  };

  return error ? (
    <ErrorPage error={error} />
  ) : (
    <>
      {status === 'loading' && <LoadIndicator size="xxl" />}
      <Heading2>
        Выберите размер посылки
      </Heading2>
      <Paper>
        <SizesWrapper>
          {
            checkedCells.map((cell) => {
              const widthCm = Math.floor(cell.params.width / 10);
              const heightCm = Math.floor(cell.params.height / 10);
              const params = `${widthCm} x ${heightCm} см`;
              const Img = cell.image;
              const isSelected = cell.size === selectedCell?.size;

              return (
                <CellBox
                  key={cell.size}
                  onClick={() => selectCell(cell)}
                  isSelected={isSelected}
                  isUnavailable={!cell.isAvailable}
                >
                  <SVGWrapper>
                    <Img />
                  </SVGWrapper>
                  <CellInfoWrapper>
                    <CellSize>
                      {cell.size}
                    </CellSize>
                    <CellParams>
                      {params}
                    </CellParams>
                  </CellInfoWrapper>
                </CellBox>
              );
            })
          }
        </SizesWrapper>
        <ButtonsWrapper>
          <Button
            variant="outlined"
            to="/boxing"
          >
            Назад
          </Button>
          <Button
            variant="contained"
            isUnavailable={!selectedCell}
            onClick={clickHandler}
          >
            Подтвердить
          </Button>
        </ButtonsWrapper>
      </Paper>
    </>
  );
}
