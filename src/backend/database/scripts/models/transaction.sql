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
  cost           udecimal not null,
  reservation_id uuid     not null check (reservation_fk(reservation_id)),
  client_id      uuid     not null references client (id),
  discount_id    uuid     null default null references discount (id)
) inherits (footprint);
