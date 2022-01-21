import { useList } from "shared/hooks";
import { courtService } from "@services";
import { columns } from "./columns";
import { Court } from "@models";
import { useState } from "react";
import { partial } from "lodash";

export const useCourtList = () => {
  const [floorFilter, setFloorFilter] = useState("");
  const [Items, Context] = useList<Court.Row>(
    partial(courtService.readAll, { floor: floorFilter })
  );
  return {
    CourtList: () => <Items columns={columns} pagination />,
    CourtListContext: Context,
    floorFilter,
    setFloorFilter,
  } as const;
};
