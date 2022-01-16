import { ApiFn } from "$/api/create-handler";
import {
  run,
  select,
  selectLastUpdatedFootprintId,
  selectNewestFootprintId,
  selectWith,
} from "$sql";

import { StatusCode } from "@internal/enums";
import { SqlCommand, SqlResponse } from "$sql/types";
import { uuid } from "@internal/types";

export interface GetProps<T> {
  name: string;
  translateFn: (raw: SqlResponse) => T;
}
export const createListGet =
  <T>({ translateFn, name }: GetProps<T>): ApiFn =>
  async ({ response }) => {
    const items = (await selectWith(
      translateFn
    )`select * from ${name} order by created_at desc`) as [];

    return await response
      .status(StatusCode.Ok)
      .json({ items, total: items.length });
  };

interface PostProps<T> {
  name: string;
  createFn: (body: SqlResponse) => SqlCommand;
}
export const createListPost =
  <T>({ createFn, name }: PostProps<T>): ApiFn =>
  async ({ request, response }) => {
    const { body } = request;

    await run(createFn(body));

    const [{ id, created_at }] = await select(selectNewestFootprintId(name));
    return await response.status(StatusCode.Created).json({
      message: `successfully created new resource '${id}'.`,
      createdAt: created_at,
    });
  };

interface DeleteProps {
  deleteFn: (id: uuid) => SqlCommand;
}
export const createListDelete =
  ({ deleteFn }: DeleteProps): ApiFn =>
  async ({ request, response }) => {
    const { id } = request.query;

    await run(deleteFn(id as string));

    await response
      .status(StatusCode.Ok)
      .json({ message: `successfully deleted resource.` });
  };

interface PutProps<T> {
  updateFn: (id: uuid, item: T) => SqlCommand;
}
export const createListPut =
  <T>({ updateFn }: PutProps<T>): ApiFn =>
  async ({ request, response }) => {
    const { body } = request;
    const { id } = request.query;

    await run(updateFn(id as string, body));
    const [{ id: updatedId, updated_at }] = await select(
      selectLastUpdatedFootprintId("client")
    );

    await response.status(StatusCode.Ok).json({
      message: `successfully updated resource '${updatedId}'.`,
      updatedAt: updated_at,
    });
  };
