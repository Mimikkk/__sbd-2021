drop table if exists item;

create table item
(
  primary key (id),
  name        varchar not null,
  count       uint    not null,
  description varchar null
) inherits (footprint);
