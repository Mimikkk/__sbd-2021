import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
export const SchedulerContents = () => {
  const {
    day: { date },
  } = useSchedulerContext();

  return <div>{date.toString()}</div>;
};
