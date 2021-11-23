import { Court } from "@models";
import { SqlCommand, SqlResponse } from "$sql/types";
import { uuid } from "@internal/types";
import { translateFootprint } from "$sql/orm/footprint.orm";

export const translateCourt = (raw: SqlResponse): Court.Entity => ({
  ...translateFootprint(raw),
  name: raw.name,
  isUnderMaintenance: raw.is_under_maintenance,
  isCovered: raw.is_covered,
  floor: raw.floor,
});

export const selectNewestCourtId = (): SqlCommand => `
  select id, created_at from courts order by created_at desc limit 1;
`;

export const selectLastUpdatedCourtId = (): SqlCommand => `
  select id, updated_at from courts order by updated_at desc limit 1;
`;

export const createCourt = (model: Court.Model): SqlCommand => `
  insert into courts(name, floor, is_covered, is_under_maintenance)
  values ('${model.name}', '${model.floor}', ${model.isCovered}, ${model.isUnderMaintenance});
`;

export const updateCourt = (id: uuid, model: Court.Model): SqlCommand => `
  update courts
  set name                 = ${model.name},
      floor                = ${model.floor},
      is_covered           = ${model.isCovered},
      is_under_maintenance = ${model.isUnderMaintenance}
  where id = ${id};
`;

export const deleteCourt = (id: uuid): SqlCommand => `
  delete from courts where id = ${id};
`;
