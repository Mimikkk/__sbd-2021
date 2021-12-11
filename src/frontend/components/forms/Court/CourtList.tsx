import { useList } from "shared/hooks";
import { courtService } from "@services";
import { columns } from "./columns";
import { Court } from "@models";

export const CourtList = () => {
  const [List] = useList<Court.Row>(courtService.readAll);

  return <List columns={columns} pagination />;
};
