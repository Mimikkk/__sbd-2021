drop table if exists court;

create table court
(
  primary key (id),
  name                 text not null,
  floor                text not null,
  is_covered           bool not null
) inherits (footprint);

