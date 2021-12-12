create extension if not exists "uuid-ossp";

drop domain if exists uint cascade;
drop domain if exists udecimal cascade;

create domain uint as int check (value >= 0);
create domain udecimal as decimal check (value >= 0);

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
  address   varchar not null,
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

drop table if exists client;

create table client
(
  primary key (id),
  is_permanent bool not null default false
) inherits (person);

drop table if exists court;

create table court
(
  primary key (id),
  name                 text not null,
  floor                text not null,
  is_covered           bool not null,
  is_under_maintenance bool not null default false
) inherits (footprint);


drop table if exists discount;

create table discount
(
  primary key (id),
  name          varchar,
  value         udecimal not null,
  is_percentage bool     not null,
  description   varchar  not null
) inherits (footprint);

drop table if exists employee;

create table employee
(
  primary key (id),
  is_teacher   boolean  not null default false,
  payroll      udecimal not null,
  bank_account varchar  not null
) inherits (person);

drop table if exists court_reservation;

create table court_reservation
(
  primary key (id),
  court_id   uuid    not null,
  teacher_id uuid    null default null,
  is_lesson  boolean not null,
  foreign key (court_id) references court (id),
  foreign key (teacher_id) references employee (id)
) inherits (reservation);

drop table if exists item;

create table item
(
  primary key (id),
  name        varchar not null,
  count       uint    not null,
  description varchar null
) inherits (footprint);

drop table if exists item_reservation;

create table item_reservation
(
  primary key (id),
  item_id uuid not null,
  count   uint not null,
  foreign key (item_id) references item (id)
) inherits (reservation);

drop table if exists price;

create table price
(
  primary key (id),
  description varchar  not null,
  cost        udecimal not null
) inherits (footprint);

drop table if exists transaction;

create table transaction
(
  primary key (id),
  cost           udecimal not null,
  reservation_id uuid     not null,
  discount_id    uuid     null default null,
  client_id      uuid     not null,
  foreign key (reservation_id) references reservation (id),
  foreign key (discount_id) references discount (id),
  foreign key (client_id) references client (id)
) inherits (footprint);
