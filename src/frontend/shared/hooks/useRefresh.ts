import { useCallback } from "react";
import { useToggle } from "./useToggle";

export const useRefresh = (): [boolean, () => void] => {
  const [refresh, toggle] = useToggle();

  const refreshCallback = useCallback(() => toggle(), []);

  return [refresh, refreshCallback];
};
