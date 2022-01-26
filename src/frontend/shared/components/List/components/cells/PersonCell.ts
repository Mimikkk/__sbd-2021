import { Person } from "@models";
import { uuid } from "@internal/types";
import { formatPerson } from "shared/utils";
import { ListCellProps } from "shared/components/List/components/ListCell";

export const PersonCell =
  <T extends Person.Entity>(people: Record<uuid, T>) =>
  ({ value }: ListCellProps<Person.Entity>) =>
    (people[value] && formatPerson(people[value])) || "-";
