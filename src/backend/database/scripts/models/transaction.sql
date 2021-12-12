drop table if exists transaction;

create table transaction
(
  primary key (id),
  cost           udecimal not null,
  reservation_id uuid     not null,
  discount_id    uuid     null default null,
  client_id      uuid     not null,
  foreign key (reservation_id) references reservation (id),
  foreign key (discount_id) references discount (id),
  foreign key (client_id) references client (id)
) inherits (footprint);
