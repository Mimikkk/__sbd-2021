import { Button, Tile } from "shared/components";
import {
  useEmployeeList,
} from "components/hooks";
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from '../frontend/shared/hooks';
import { EmployeeForm} from '../frontend/components/forms';


export default () => {
  const [EmployeeList, EmployeeListContext] = useEmployeeList();
  const [EmployeeModal, open] = useModal(<EmployeeForm />, "Add employee");

  return (
    <Tile>
      <EmployeeListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Employees</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new employee"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <EmployeeModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <EmployeeList />
          </Grid>
        </Grid>
      </EmployeeListContext>
    </Tile>
  );
};
