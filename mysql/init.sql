CREATE TABLE messages (
    id BIGINT PRIMARY KEY,
    content VARCHAR(255) NOT NULL
);
INSERT INTO messages (id, content) VALUES (1, 'Hello from MySQL Database!');