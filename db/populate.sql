-- Create songs
DROP TABLE IF EXISTS songs CASCADE;

CREATE TABLE songs (
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL,
      link VARCHAR NOT NULL,
      street VARCHAR NOT NULL,
      comment VARCHAR,
      submitted_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO songs (name, link, street, comment) VALUES ('chilou', 'https://www.youtube.com/watch?v=l0yRNQj2_tc&ab_channel=GondwanaRecords', 'Rue de paradis', 'enjoy');
