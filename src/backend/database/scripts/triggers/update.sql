drop function if exists footprint_update;
create or replace function footprint_update() returns trigger
as $$
begin
  new.updated_at := current_timestamp;
  return new;
end;
$$ language plpgsql;

drop trigger if exists footprint_update on footprint;
drop trigger if exists footprint_update on person;
drop trigger if exists footprint_update on reservation;
drop trigger if exists footprint_update on client;
drop trigger if exists footprint_update on court;
drop trigger if exists footprint_update on court_reservation;
drop trigger if exists footprint_update on discount;
drop trigger if exists footprint_update on employee;
drop trigger if exists footprint_update on item;
drop trigger if exists footprint_update on item_reservation;
drop trigger if exists footprint_update on price;
drop trigger if exists footprint_update on transaction;
create trigger footprint_update
  before update
  on footprint
execute procedure footprint_update();
create trigger footprint_update
  before update
  on item
execute procedure footprint_update();
create trigger footprint_update
  before update
  on transaction
execute procedure footprint_update();
create trigger footprint_update
  before update
  on court
execute procedure footprint_update();
create trigger footprint_update
  before update
  on discount
execute procedure footprint_update();
create trigger footprint_update
  before update
  on price
execute procedure footprint_update();
create trigger footprint_update
  before update
  on person
execute procedure footprint_update();
create trigger footprint_update
  before update
  on client
execute procedure footprint_update();
create trigger footprint_update
  before update
  on employee
execute procedure footprint_update();
create trigger footprint_update
  before update
  on reservation
execute procedure footprint_update();
create trigger footprint_update
  before update
  on item_reservation
execute procedure footprint_update();
create trigger footprint_update
  before update
  on court_reservation
execute procedure footprint_update();
