drop table if exists person cascade;

create table person
(
  primary key (id),
  name      varchar not null,
  surname   varchar not null,
  birthdate date    not null,
  address   varchar not null,
  phone     varchar not null,
  email     varchar null
) inherits (footprint);
