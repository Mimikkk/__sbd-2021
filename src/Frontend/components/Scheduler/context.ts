import { createContext } from 'react';

export interface Props {}

export const initial: Props = {
  courts: [],
  selectedCourt: null,
};

export const SchedulerContext = createContext<Props>(initial);
