drop table if exists person cascade;

create table person
(
    primary key (id),
    name         varchar not null,
    surname      varchar not null,
    birthdate    date    not null,
    phone_number varchar not null,
    email        varchar null
) inherits (footprint);
