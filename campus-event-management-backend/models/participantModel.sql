CREATE TABLE participants (
    id                SERIAL PRIMARY KEY,
    user_id           INT REFERENCES users (id) ON DELETE CASCADE,
    event_id          INT REFERENCES events (id) ON DELETE CASCADE,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
