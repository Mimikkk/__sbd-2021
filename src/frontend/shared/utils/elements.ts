import { map } from 'lodash';

export const packed = <T extends object>(
  values: T[keyof T][],
  names: (keyof T)[],
): T =>
  names.reduce<T>((acc, name, index) => {
    acc[name] = values[index];
    return acc;
  }, {} as T);

export const pack =
  <T extends object>(...names: (keyof T)[]) =>
  (...values: T[keyof T][]): T =>
    packed(values, names);

export const elements = <Y extends object, T>(
  items: Y[keyof Y][],
  ...props: (keyof Y)[]
): Y[] => map(items, (item) => pack(...props)(item));
