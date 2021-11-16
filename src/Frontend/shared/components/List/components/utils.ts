import { isNil, map, omitBy, partial } from 'lodash';
import { SyntheticEvent } from 'react';

export const onActions = <T extends object>(item: T) => omitBy(item, isNil);

export const runEvent =
  <T extends object>(item: T, type: string) =>
  (event: SyntheticEvent) =>
    (item as any)?.[type]?.(event);

export const runEvents = <T extends object>(
  item: T,
  ...types: string[]
): object => map(types, partial(runEvent, item));

export const isIn = <T extends object>(item: T, prop: string): item is T =>
  prop in item;

export const anyIn = <T extends object>(item: T, ...props: string[]) =>
  props.some(partial(isIn, item));

export const isDraggable = <T extends object>(item: T) =>
  anyIn(item, 'onDragEnter', 'onDragOver', 'onDragStart', 'onDragEnd');
