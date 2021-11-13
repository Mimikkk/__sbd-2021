import { map } from 'lodash';

export const packed = <T extends object>(
  names: (keyof T)[],
  values: T[keyof T][],
): T =>
  names.reduce<T>((acc, name, index) => {
    acc[name] = values[index];
    return acc;
  }, {} as T);

export const pack =
  <T extends object>(...names: (keyof T)[]) =>
  (...values: T[keyof T][]): T =>
    packed(names, values);

export const elements = <Y extends object, T>(
  items: Y[keyof Y][],
  ...names: (keyof Y)[]
): Y[] => map(items, (item) => pack(...names)(item));
