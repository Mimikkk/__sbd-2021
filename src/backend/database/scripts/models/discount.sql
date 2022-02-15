drop table if exists discount;

create table discount
(
  primary key (id),
  name          varchar,
  value         udecimal not null,
  is_percentage bool     not null,
  description   varchar  not null
) inherits (footprint);

insert into discount (id, name, value, is_percentage, description)
values ('d1b31a98-7f82-11ec-ba10-022c73556905', 'Stały klient', 10, true, 'Zniżka stałego klienta');