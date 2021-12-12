drop table if exists court_reservations;

create table court_reservations
(
  primary key (id),
  court_id uuid,
  foreign key (court_id) references courts (id)
) inherits (reservation);
