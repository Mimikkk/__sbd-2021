import { SchedulerBody, SchedulerFooter, SchedulerHeader } from "./components";
import { useScheduler } from "./hooks";
import { style } from "styles";

export const Scheduler = () => {
  const [SchedulerProvider] = useScheduler();

  return (
    <div className={style("scheduler")}>
      <SchedulerProvider>
        <SchedulerHeader />
        <SchedulerBody />
        <SchedulerFooter />
      </SchedulerProvider>
    </div>
  );
};
