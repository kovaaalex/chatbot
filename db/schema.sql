-- users (managed by supabase auth)

CREATE TABLE chats (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid,
    title text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id uuid REFERENCES chats(id) ON DELETE CASCADE,
    role text,
    content text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE usage_limits (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    identifier text,
    count int DEFAULT 0
);