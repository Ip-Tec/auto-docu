-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing

-- Users Table
create table
  users (
    user_id uuid primary key default uuid_generate_v4 (),
    name text not null,
    email text not null unique,
    password_hash text not null,
    created_at timestamp
  );

-- Templates Table
create table
  templates (
    template_id uuid primary key default uuid_generate_v4 (),
    user_id uuid references users (user_id),
    name text not null,
    content text not null,
    created_at timestamp
  );

-- Documents Table
create table
  documents (
    document_id uuid primary key default uuid_generate_v4 (),
    user_id uuid references users (user_id),
    template_id uuid references templates (template_id),
    content text,
    status text,
    final_pdf_url text,
    created_at timestamp
  );

-- Recipients Table
create table
  recipients (
    recipient_id uuid primary key default uuid_generate_v4 (),
    document_id uuid references documents (document_id),
    email text not null,
    status text,
    created_at timestamp
  );

-- Signatures Table
create table
  signatures (
    signature_id uuid primary key default uuid_generate_v4 (),
    document_id uuid references documents (document_id),
    recipient_id uuid references recipients (recipient_id),
    signed_at timestamp,
    created_at timestamp
  );

-- ActivityLogs Table
create table
  activity_logs (
    log_id uuid primary key default uuid_generate_v4 (),
    document_id uuid references documents (document_id),
    recipient_id uuid references recipients (recipient_id),
    activity_type text,
    created_at timestamp
  );