drop table if exists item_reservation;

create table item_reservation
(
  primary key (id),
  item_id uuid not null references item (id),
  count   uint not null
) inherits (reservation);
