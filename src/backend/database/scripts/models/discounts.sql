drop table if exists discounts;

create table discounts
(
  primary key (id),
  name          varchar,
  value         udecimal not null,
  is_percentage bool     not null
) inherits (footprint);
