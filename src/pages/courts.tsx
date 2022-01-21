import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { CourtForm } from "dedicated/forms";
import { useCourtList } from "dedicated/hooks";
import { TextField } from "@mui/material";
import { useListContext } from "shared/contexts";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { VFC } from "react";

export interface Props<T> {
  value: T;
  setValue(value: T): void;
}
export const FilterField: VFC<Props<string>> = ({ value, setValue }) => {
  const { refresh } = useListContext();

  return (
    <div style={{ display: "flex", columnGap: "4px" }}>
      <Button icon={<FilterAltIcon />} onClick={refresh} />
      <TextField
        size="small"
        label="Floor type"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </div>
  );
};

export default () => {
  const [CourtModal, open] = useModal(<CourtForm />, "Add new court");
  const { CourtList, CourtListContext, floorFilter, setFloorFilter } =
    useCourtList();

  return (
    <Tile>
      <CourtListContext>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3">Courts</Typography>
          <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
            <FilterField value={floorFilter} setValue={setFloorFilter} />
            <Button title="Add new court" icon={<AddIcon />} onClick={open} />
            <CourtModal />
          </div>
        </div>
        <CourtList />
      </CourtListContext>
    </Tile>
  );
};
