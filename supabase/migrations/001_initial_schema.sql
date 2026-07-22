create table contact_submissions (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  phone text,
  country text not null,
  message text not null,
  lodge_type text,
  service_needed text,
  lodge_size text,
  created_at timestamptz default now()
);

create table lead_submissions (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  whatsapp text,
  preferred_contact text default 'email',
  lodge_name text,
  location text,
  biggest_challenge text,
  existing_services text,
  timeline text,
  areas_of_interest text,
  created_at timestamptz default now()
);

create table newsletter_subscribers (
  id bigint generated always as identity primary key,
  first_name text not null,
  email text not null unique,
  created_at timestamptz default now()
);

alter table contact_submissions enable row level security;
alter table lead_submissions enable row level security;
alter table newsletter_subscribers enable row level security;

grant all on contact_submissions to service_role;
grant all on lead_submissions to service_role;
grant all on newsletter_subscribers to service_role;
grant usage, select on all sequences in schema public to service_role;
