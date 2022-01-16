import { uuid } from "@internal/types";
import { Person } from "@models";
import { Option } from "./types";
import { formatPerson } from "shared/utils";

export const peopleToOptions = <T extends Person.Entity>(
  people: T[]
): Option<uuid>[] => people.map(personToOption);

export const personToOption = <T extends Person.Entity>(
  person: T
): Option<uuid> => ({
  value: person.id,
  label: formatPerson(person),
});
