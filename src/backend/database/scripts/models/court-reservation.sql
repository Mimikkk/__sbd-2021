drop table if exists court_reservation;

create table court_reservation
(
  primary key (id),
  court_id   uuid not null references court (id),
  teacher_id uuid null default null references employee (id)
) inherits (reservation);
