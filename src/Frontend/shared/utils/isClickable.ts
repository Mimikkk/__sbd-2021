export type Clickable<T, Y = undefined> = T & {
  onClick: Y extends undefined ? () => void : (event: Y) => void;
};

export const isClickable = <T extends object>(item: T): item is Clickable<T> =>
  'onClick' in item;

export const click =
  <T extends object>(item: T) =>
  () =>
    isClickable(item) && item.onClick();
