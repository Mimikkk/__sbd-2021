export const formatPerson = <T extends { name: string; surname: string }>({
  name,
  surname,
}: T): string => `${name} ${surname}`;
