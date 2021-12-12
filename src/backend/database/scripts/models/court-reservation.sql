drop table if exists court_reservation;

create table court_reservation
(
  primary key (id),
  court_id   uuid    not null,
  teacher_id uuid    null default null,
  is_lesson  boolean not null,
  foreign key (court_id) references court (id),
  foreign key (teacher_id) references employee (id)
) inherits (reservation);
