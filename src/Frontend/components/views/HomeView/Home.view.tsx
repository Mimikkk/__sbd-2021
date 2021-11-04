import { Grid, Button } from '@mui/material';
import { CourtService } from 'Frontend/shared/services';
import * as faker from 'faker';

export const HomeView = () => {
  return (
    <Grid>
      <Grid textAlign="center">Home View</Grid>
      <Button
        onClick={async () =>
          await CourtService.create({
            isUnderMaintenance: false,
            isCovered: false,
            floor: 'super',
          })
        }
      >
        Create
      </Button>
      <Button onClick={async () => await CourtService.readAll()}>Read</Button>
      <Button
        onClick={async () =>
          await CourtService.update(faker.datatype.uuid(), {
            isCovered: true,
            floor: 'super',
            isUnderMaintenance: false,
          })
        }
      >
        Update
      </Button>
      <Button
        onClick={async () => await CourtService.delete(faker.datatype.uuid())}
      >
        Delete
      </Button>
    </Grid>
  );
};
