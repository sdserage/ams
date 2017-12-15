CREATE TABLE instrumentations (
  item_id INT REFERENCES inquiry_items (item_id) NOT NULL,
  process VARCHAR(30),
  temperature DECIMAL,
  pressure DECIMAL,
  pipe_size DECIMAL,
  pipe_additional_information VARCHAR(3000),
  additional_information VARCHAR(3000)
);
