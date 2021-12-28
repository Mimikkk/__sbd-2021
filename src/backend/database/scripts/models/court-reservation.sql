drop table if exists court_reservation;

create table court_reservation
(
  primary key (id),
  court_id   uuid    not null references court (id),
  teacher_id uuid    null default null references employee (id),
  is_lesson  boolean not null
) inherits (reservation);
