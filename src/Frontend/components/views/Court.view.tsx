import { useEffect, useReducer } from 'react';
import { CourtService } from 'Frontend/shared/services';

export const CourtView = () => {
  const [items, setItems] = useReducer((items) => [...items], []);

  useEffect(() => {
    CourtService.readAll().then(setItems).catch(console.log);
  }, []);

  console.log(items);

  return (
    <p>
      I am Sport Object View, I view Sport Objects List and allow for their
      modification wowie!
    </p>
  );
};
