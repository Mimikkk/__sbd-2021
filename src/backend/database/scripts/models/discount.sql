drop table if exists discount;

create table discount
(
  primary key (id),
  name          varchar,
  value         udecimal not null,
  is_percentage bool     not null,
  description   varchar  not null
) inherits (footprint);
