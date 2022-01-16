import { Grid, Typography } from "@mui/material";
import { Tile } from "shared/components";
import { useTransactionList } from "dedicated/hooks";

export default () => {
  const [TransactionList, TransactionListContext] = useTransactionList();

  return (
    <Tile>
      <TransactionListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Transactions</Typography>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <TransactionList />
          </Grid>
        </Grid>
      </TransactionListContext>
    </Tile>
  );
};
