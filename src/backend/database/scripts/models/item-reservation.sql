drop table if exists item_reservation;

create table item_reservation
(
  primary key (id),
  item_id uuid not null,
  count   uint not null,
  foreign key (item_id) references item (id)
) inherits (reservation);
