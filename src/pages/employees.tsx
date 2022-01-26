import { Button, EmptyPage, Tile } from "shared/components";
import { useEmployeeList } from "dedicated/hooks";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "shared/hooks";
import { EmployeeForm } from "dedicated/forms";

export default () => {
  const [EmployeeList, EmployeeListContext] = useEmployeeList();
  const [EmployeeModal, open] = useModal(<EmployeeForm />, "Add employee");

  return (
    <Tile>
      <EmployeeListContext>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3">Employees</Typography>
            <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
              <Button
                title="Add new employee"
                icon={<AddIcon />}
                onClick={open}
              />
              <EmployeeModal />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {EmployeeList.length !== 0 ? <EmployeeList /> : <EmptyPage />}
          </div>
        </div>
      </EmployeeListContext>
    </Tile>
  );
};
