drop table if exists client;

create table client
(
  primary key (id),
  is_permanent bool not null default false
) inherits (person);
