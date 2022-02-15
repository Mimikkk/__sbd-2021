drop table if exists item_reservation;

create table item_reservation
(
  primary key (id),
  court_reservation_id uuid not null references court_reservation (id),
  item_id              uuid not null references item (id),
  price_id             uuid not null references price (id),
  count                uint not null
) inherits (reservation);
