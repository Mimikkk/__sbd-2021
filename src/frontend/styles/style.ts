import { merge } from "lodash";
import dateSelect from "shared/components/fields/DateSelect/DateSelect.module.scss";
import formDateSelect from "shared/components/fields/DateSelect/FormDateSelect.module.scss";
import navigator from "components/Navigator/Navigator.module.scss";
import scheduler from "components/Scheduler/Scheduler.module.scss";
import list from "shared/components/List/List.module.scss";
import tile from "shared/components/Tile/Tile.module.scss";
import form from "shared/components/Form/Form.module.scss";
import app from "./App.module.scss";

const styles = merge(app, list, scheduler, dateSelect, formDateSelect, navigator, tile, form);

export const style = (key: string) => {
  if (!styles[key]) {
    console.error("available styles", styles);
    throw Error(`${key} is empty or not defined in styles.`);
  }

  return styles[key];
};
