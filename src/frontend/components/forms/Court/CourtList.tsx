import { List } from "shared/components";
import { isLoading } from "shared/utils/requests";
import { useList } from "shared/hooks";
import { courtService } from "@services";
import { columns } from "./columns";

export const CourtList = () => {
  const { items, status } = useList(courtService.readAll);

  return (
    <List
      loading={isLoading(status)}
      columns={columns}
      items={items}
      pagination
    />
  );
};
