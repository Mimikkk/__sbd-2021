drop table if exists employees;

create table employees
(
    primary key (id),
    payroll             udecimal not null,
    bank_account_number varchar  not null
) inherits (person);
