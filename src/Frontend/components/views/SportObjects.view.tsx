import { useEffect, useReducer } from 'react';
import { SportObjectService } from 'Frontend/shared/services';

export const SportObjectsView = () => {
  const [items, setItems] = useReducer((items) => [...items], []);

  useEffect(() => {
    SportObjectService.readAll().then(setItems).catch(console.log);
  }, []);

  console.log(items);

  return (
    <p>
      I am Sport Object View, I view Sport Objects List and allow for their
      modification wowie!
    </p>
  );
};
