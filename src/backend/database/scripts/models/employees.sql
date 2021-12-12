drop table if exists employees;

create table employees
(
  primary key (id),
  is_teacher   boolean  not null default false,
  payroll      udecimal not null,
  bank_account varchar  not null
) inherits (person);
