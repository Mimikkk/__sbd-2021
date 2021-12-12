drop table if exists employee;

create table employee
(
  primary key (id),
  is_teacher   boolean  not null default false,
  payroll      udecimal not null,
  bank_account varchar  not null
) inherits (person);
