drop procedure if exists remove_schedule;
drop function if exists create_schedule;

create or replace procedure remove_schedule(in v_court_reservation_id uuid)
  language plpgsql as $$
begin
  delete from item_reservation ir where ir.court_reservation_id = v_court_reservation_id;
  delete from court_reservation cr where cr.id = v_court_reservation_id;
  delete
  from transaction
  where reservation_id = v_court_reservation_id
     or (reservation_id not in (select id from reservation));
end;
$$;

create or replace function create_schedule(
  in v_item_reservations json,
  in v_court_reservation_id uuid,
  in v_client_id uuid,
  in v_discount_id uuid,
  in v_teacher_id uuid,
  in v_price_id uuid
)
  returns int
  language plpgsql as $$
declare
  is_reserved boolean default false;
  json_item_reservation json;
  r_item_reservation item_reservation%rowtype;
  r_court_reservation court_reservation%rowtype;
begin
  select exists(select 1 from transaction where reservation_id = cr.id)
  into is_reserved
  from court_reservation cr
  where id = v_court_reservation_id;

  if (is_reserved) then return 418;
  end if;

  update court_reservation
  set teacher_id = v_teacher_id
  where id = v_court_reservation_id;

  select *
  into r_court_reservation
  from court_reservation
  where id = v_court_reservation_id;

  for json_item_reservation in select json_array_elements(v_item_reservations) loop
    insert into item_reservation(court_reservation_id, price_id, item_id, count, "start", "end")
    values (v_court_reservation_id,
            (json_item_reservation ->> 'priceId')::uuid,
            (json_item_reservation ->> 'itemId')::uuid,
            (json_item_reservation ->> 'count')::uint,
            r_court_reservation."start",
            r_court_reservation."end");
  end loop;

  insert into transaction(reservation_id, client_id, discount_id, price_id)
  values (v_court_reservation_id,
          v_client_id,
          v_discount_id,
          v_price_id);

  for r_item_reservation in select * from item_reservation where court_reservation_id = v_court_reservation_id loop
    insert into transaction(reservation_id, client_id, discount_id, price_id)
    values (r_item_reservation.id,
            v_client_id,
            v_discount_id,
            r_item_reservation.price_id);
  end loop;

  return 200;
end;
$$;
