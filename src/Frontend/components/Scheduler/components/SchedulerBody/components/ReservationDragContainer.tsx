import { styled, Paper } from '@mui/material';

const reservationDrag = 'scheduler-reservation__container';
export const reservationDragContainer = () =>
  document.getElementById(reservationDrag);
const ReservationDragContainer = () => (
  <Paper id={reservationDrag} elevation={2} />
);

export const ReservationDrag = styled(ReservationDragContainer)``;
