import { Grid, IconButton } from '@mui/material';
import React, { VFC } from 'react';

export interface Props {
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
  canPreviousPage: boolean;
  previousPage: () => void;
  pageOptions: number[];
  canNextPage: boolean;
  nextPage: () => void;
  pageIndex: number;
  pageCount: number;
}

export const ListPagination: VFC<Props> = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  pageOptions,
  canNextPage,
  nextPage,
  pageIndex,
  pageCount,
}) => {
  return (
    <Grid>
      <div className="pagination" style={{ margin: '1em' }}>
        <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {' '}
          {'<<'}
        </IconButton>
        <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </IconButton>

        <span style={{ margin: '1em', color: 'rgba(145, 150, 153, 1)' }}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </IconButton>
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </IconButton>
      </div>
    </Grid>
  );
};
