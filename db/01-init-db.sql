DROP TABLE IF EXISTS sreality;
CREATE TABLE sreality
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR NOT NULL,
    locality VARCHAR NOT NULL,
    images   VARCHAR[] NOT NULL
);

