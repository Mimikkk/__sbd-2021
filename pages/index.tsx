import { Tile } from 'shared/components';
import { useEffect, useState } from 'react';
import { Nullable } from 'shared/types';
import { courtService } from 'shared/services';
import { Court } from 'shared/models';

const Index = () => {
  const [items, setItems] = useState<Nullable<Court.Model[]>>(null);

  useEffect(() => {
    courtService.readAll().then(setItems);
  }, []);

  return (
    <Tile>
      <p>aa</p>
    </Tile>
  );
};

export default Index;
