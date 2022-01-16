drop table if exists price;

create table price
(
  primary key (id),
  name varchar  not null,
  cost udecimal not null
) inherits (footprint);
