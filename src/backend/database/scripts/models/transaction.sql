drop index if exists pending_reservation;
drop table if exists transaction;
drop function if exists reservation_fk;

create function reservation_fk(v_id uuid) returns boolean as $$
begin
  return exists(select * from court_reservation cr where cr.id = v_id) or
         exists(select * from item_reservation ir where ir.id = v_id);
end;
$$ language plpgsql;

create table transaction
(
  primary key (id),
  price_id       uuid not null references price (id),
  reservation_id uuid not null check (reservation_fk(reservation_id)),
  discount_id    uuid null default null references discount (id),
  client_id      uuid not null references client (id)
) inherits (footprint);

create index pending_reservation on transaction (reservation_id);

update court_reservation
set "start"      = '2022-02-14T06:30:00+00:00',
    "end"        = '2022-02-14T09:30:00+00:00',
    "court_id"   = 'a2ca210e-8dd8-11ec-a41a-022c73556905',
    "teacher_id" = null
where id = 'a2ca210e-8dd8-11ec-a41a-022c73556905';
select * from court;
select * from court_reservation;