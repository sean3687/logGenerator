-- migrations/<timestamp>_create_users_table.sql

create table users (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);
