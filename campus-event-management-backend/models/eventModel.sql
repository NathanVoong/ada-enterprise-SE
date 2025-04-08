CREATE TABLE events (
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    description  TEXT,
    date         TIMESTAMP    NOT NULL,
    organizer_id INT REFERENCES users (id) ON DELETE CASCADE
);
