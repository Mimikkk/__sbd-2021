drop table if exists prices;

create table prices
(
  primary key (id),
  cost        udecimal not null,
  discount_id uuid     null default null,
  foreign key (discount_id) references discounts (id)
) inherits (footprint);
