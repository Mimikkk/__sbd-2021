drop domain if exists uint cascade;
drop domain if exists udecimal cascade;

create domain uint as int check (value >= 0);
create domain udecimal as decimal check (value >= 0);
