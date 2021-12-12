drop table if exists clients;

create table clients
(
  primary key (id),
  is_permanent bool not null default false
) inherits (person);
