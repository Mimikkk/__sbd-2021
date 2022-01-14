import { Person } from "@models";
import { Option } from "shared/components";
import { formatPerson } from "shared/utils";

export const personToOptions = <T extends Person.Entity>(
  people: T[]
): Option[] => people.map(personToOption);

export const personToOption = <T extends Person.Entity>(person: T): Option => ({
  value: person.id,
  label: formatPerson(person),
});
