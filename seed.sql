-- POSTS
CREATE TABLE IF NOT EXISTS sightings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  is_true_name Varchar(3) NOT NULL,
  looks VARCHAR(255) NOT NULL,
  was_happy VARCHAR(3),
  postcode VARCHAR(4) NOT NULL,
  location_desc Varchar(255 )NOT NULL,
  notes TEXT,
  photo TEXT,
  date BIGINT NOT NULL
)

-- COMMENTS
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  sightings_id INTEGER REFERENCES sightings(id)
)

--CREATE POST
INSERT INTO sightings(name, is_true_name, looks, was_happy, postcode, location_desc, notes, photo) VALUES ('Happy yellow', 'NO', 'Chonky yellow dog with happy, derpy face', 'YES', 'PE2', 'Next to Greggs', 'Chilling on the floor while mum was chatting', 'https://i.imgur.com/Zd8Il4r.jpeg')


--CREATE COMMENT
INSERT INTO comments(name, comment, sightings_id) VALUES ('Filip','He is my favourite one!','1'), ('Happy Yellow FTW1','Best boi','1')