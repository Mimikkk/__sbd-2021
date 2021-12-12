import { Grid, IconButton } from "@mui/material";
import React, { VFC } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
    <Grid container style={{ display: "flex", alignItems: "center" }}>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          children={<FirstPageIcon />}
        />
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          children={<NavigateBeforeIcon />}
        />
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            margin: "1em",
            color: "rgba(145, 150, 153, 1)",
          }}
        >
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
          children={<NavigateNextIcon />}
        />
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          children={<LastPageIcon />}
        />
      </Grid>
    </Grid>
  );
};
