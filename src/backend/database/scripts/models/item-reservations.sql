drop table if exists item_reservations;

create table item_reservations
(
  primary key (id),
  item_id uuid not null,
  foreign key (item_id) references items (id)
) inherits (reservation);
