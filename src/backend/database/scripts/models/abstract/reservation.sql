drop table if exists reservation cascade;

create table reservation
(
  primary key (id),
  start timestamp not null,
  "end" timestamp not null check (start < "end")
) inherits (footprint);
