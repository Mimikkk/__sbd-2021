drop domain if exists uint cascade;
drop domain if exists udecimal cascade;

create domain uint as int check (value >= 0);
create domain udecimal as decimal check (value >= 0);

create extension if not exists "uuid-ossp";

drop table if exists footprint cascade;

create table footprint
(
  id         uuid primary key unique not null default uuid_generate_v1(),
  created_at timestamp               not null default current_timestamp,
  updated_at timestamp               null check (created_at <= updated_at)
);

drop table if exists person cascade;

create table person
(
  primary key (id),
  name      varchar not null,
  surname   varchar not null,
  birthdate date    not null,
  phone     varchar not null,
  email     varchar null
) inherits (footprint);

drop table if exists reservation cascade;

create table reservation
(
  primary key (id),
  start timestamp not null,
  "end" timestamp not null check (start < "end")
) inherits (footprint);

drop table if exists clients;

create table clients
(
  primary key (id),
  is_permanent bool not null default false
) inherits (person);

drop table if exists court_reservations;

create table court_reservations
(
  primary key (id),
  court_id uuid,
  foreign key (court_id) references courts (id)
) inherits (reservation);

drop table if exists courts;

create table courts
(
  primary key (id),
  name                 text not null,
  floor                text not null,
  is_covered           bool not null,
  is_under_maintenance bool not null default false
) inherits (footprint);

drop table if exists discounts;

create table discounts
(
  primary key (id),
  name          varchar,
  value         udecimal not null,
  is_percentage bool     not null
) inherits (footprint);

drop table if exists employees;

create table employees
(
  primary key (id),
  is_teacher   boolean  not null default false,
  payroll      udecimal not null,
  bank_account varchar  not null
) inherits (person);

drop table if exists item_reservations;

create table item_reservations
(
  primary key (id),
  item_id uuid not null,
  foreign key (item_id) references items (id)
) inherits (reservation);

drop table if exists items;

create table items
(
  primary key (id),
  name  varchar not null,
  count uint    not null
) inherits (footprint);

drop table if exists prices;

create table prices
(
  primary key (id),
  cost        udecimal not null,
  discount_id uuid     null default null,
  foreign key (discount_id) references discounts (id)
) inherits (footprint);

drop function if exists footprint_update;
create or replace function footprint_update() returns trigger
as $$
begin
  new.updated_at := current_timestamp;
  return new;
end;
$$ language plpgsql;

drop trigger if exists footprint_update on footprint;
drop trigger if exists footprint_update on items;
drop trigger if exists footprint_update on courts;
drop trigger if exists footprint_update on discounts;
drop trigger if exists footprint_update on prices;
drop trigger if exists footprint_update on person;
drop trigger if exists footprint_update on clients;
drop trigger if exists footprint_update on employees;
drop trigger if exists footprint_update on reservation;
drop trigger if exists footprint_update on item_reservations;
drop trigger if exists footprint_update on court_reservations;
create trigger footprint_update
  before update
  on footprint
execute procedure footprint_update();
create trigger footprint_update
  before update
  on items
execute procedure footprint_update();
create trigger footprint_update
  before update
  on courts
execute procedure footprint_update();
create trigger footprint_update
  before update
  on discounts
execute procedure footprint_update();
create trigger footprint_update
  before update
  on prices
execute procedure footprint_update();
create trigger footprint_update
  before update
  on person
execute procedure footprint_update();
create trigger footprint_update
  before update
  on clients
execute procedure footprint_update();
create trigger footprint_update
  before update
  on employees
execute procedure footprint_update();
create trigger footprint_update
  before update
  on reservation
execute procedure footprint_update();
create trigger footprint_update
  before update
  on item_reservations
execute procedure footprint_update();
create trigger footprint_update
  before update
  on court_reservations
execute procedure footprint_update();
