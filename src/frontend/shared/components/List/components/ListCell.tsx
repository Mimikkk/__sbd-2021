import { Cell } from "react-table";
import { isDraggable, runEvents } from "./utils";

export interface ListCellProps<T extends object, V = any> {
  cell: Cell<T, V>;
  value: V;
}

export const ListCell = <T extends object, V = any>({
  cell,
}: ListCellProps<T, V>) => (
  <td
    {...cell.getCellProps()}
    {...runEvents(
      cell,
      "onClick",
      "onDragStart",
      "onDragEnd",
      "onDragOver",
      "onDragEnter"
    )}
    draggable={isDraggable(cell)}
    id={`${cell.column.id}.${cell.row.index}`}
  >
    {cell.render("Cell")}
  </td>
);
