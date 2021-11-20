import { FC, ReactElement, VFC } from 'react';

export const useFactory = <Y, T extends ReactElement<Y> = ReactElement<Y>>(
  Component: FC<Y>,
) => {
  const One = (props: Y) => <Component {...props} />;
  const Many: VFC<{ items: Y[] }> = ({ items }) => (
    <>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </>
  );

  return [Many, One] as const;
};
