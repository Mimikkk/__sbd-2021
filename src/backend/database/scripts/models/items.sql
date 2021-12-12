drop table if exists items;

create table items
(
  primary key (id),
  name        varchar not null,
  count       uint    not null,
  description varchar null
) inherits (footprint);
