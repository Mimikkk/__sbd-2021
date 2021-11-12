import { FC, ReactElement, VFC } from 'react';

export const useFactory = <T extends ReactElement<Y>, Y>(Component: FC<Y>) => {
  const One: FC<Y> = (props: Y) => <Component {...props} />;
  const Many: VFC<{ items: Y[] }> = ({ items }) => (
    <>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </>
  );

  return [Many, One] as const;
};
