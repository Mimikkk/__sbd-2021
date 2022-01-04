import { isSuccess } from "shared/utils/requests";
import { SchedulerEmpty } from "./Empty";
import { SchedulerLoading } from "./Loading";
import { SchedulerContents } from "./Contents";
import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";

export const SchedulerBody = () => {
  const { status, courts } = useSchedulerContext();

  return !isSuccess(status) ? (
    <SchedulerLoading />
  ) : courts.length > 0 ? (
    <SchedulerContents />
  ) : (
    <SchedulerEmpty />
  );
};
