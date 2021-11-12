import { createContext } from 'react';

export interface Props {}

export const initial: Props = {};

export const SchedulerContext = createContext<Props>(initial);
