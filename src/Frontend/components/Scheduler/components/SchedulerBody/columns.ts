import { kebabCase, map, range } from 'lodash';
import { Scheduler } from 'shared/models';
import { HourCell } from 'shared/components';
import { CSSProperties } from 'react';
export const createSchedulerTimeColumn = (): Scheduler.Column => ({
  accessor: 'time',
  Header: 'Czas',
  Cell: HourCell,
  width: 40,
});

export const toCssString = (style: CSSProperties) =>
  Object.entries(style)
    .map(([key, value]) => `${kebabCase(key)}:${value}`)
    .join(';');

export const createSchedulerCourtColumn = (
  index: number,
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,

  onCellDragStart: (props) => {
    props.ref.current.isDragging = true;
    props.ref.current.start = props.cell;

    console.log(props.cell.render('Cell'));
    const element = document.getElementById('scheduler-dynamic__container')!;
    let img = new Image();
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    props.event.dataTransfer!.setDragImage(img, 0, 0);

    //@ts-ignore
    const { x, y } = props.event.target!.getBoundingClientRect();
    const child = document.createElement('div');
    child.id = 'scheduler-dynamic__child';
    element.appendChild(child);
  },
  onCellDragEnter: (props) => {
    if (props.ref.current.start!.column.id === props.cell.column.id) {
      props.ref.current.current = props.cell;

      //@ts-ignore
      const { x, y } = props.event.target!.getBoundingClientRect();
      props.event.dataTransfer!.clearData();

      const child = document.getElementById('scheduler-dynamic__child')!;

      child.style.cssText = toCssString({
        pointerEvents: 'none',
        position: 'fixed',
        top: `${y}px`,
        left: `${x}px`,
        width: '100px',
        height: '100px',
        background: '#ff0000',
      });

      const { clientX, clientY } = props.event;
      child.innerText = `${clientX} ${clientY}`;
    }
  },
  onCellDragEnd: (props) => {
    props.ref.current = Scheduler.initialRef;

    props.event.dataTransfer!.clearData();
    const element = document.getElementById('scheduler-dynamic__container')!;
    element.innerHTML = '';
  },
});

export const createSchedulerColumns = (n: number): Scheduler.Column[] => {
  return [
    createSchedulerTimeColumn(),
    ...map(range(n), createSchedulerCourtColumn),
  ];
};
