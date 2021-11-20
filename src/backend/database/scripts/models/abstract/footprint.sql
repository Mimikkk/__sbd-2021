drop table if exists footprint cascade;

create table footprint
(
    id         uuid primary key unique not null,
    created_at timestamp               not null default current_timestamp,
    updated_at timestamp               null check (created_at <= updated_at)
);
