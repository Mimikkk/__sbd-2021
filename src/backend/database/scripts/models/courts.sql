drop table if exists courts;

create table courts
(
  primary key (id),
  name                 text not null,
  floor                text not null,
  is_covered           bool not null,
  is_under_maintenance bool not null default false
) inherits (footprint);

