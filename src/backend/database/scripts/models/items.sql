drop table if exists items;

create table items
(
    primary key (id),
    name  varchar not null,
    count uint    not null
) inherits (footprint);
