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
