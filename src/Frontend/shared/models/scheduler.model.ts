import { Court } from './court.model';

export module Scheduler {
  export interface Row {
    courts: Court.Model[];
    time: string;
  }
}
