drop table if exists transaction;

create table transaction
(
  primary key (id),
  cost           udecimal not null,
  reservation_id uuid     not null references reservation (id),
  discount_id    uuid     null default null references discount (id),
  client_id      uuid     not null references client (id)
) inherits (footprint);
