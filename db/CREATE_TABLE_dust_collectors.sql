CREATE TABLE dust_collectors (
  item_id INT REFERENCES inquiry_items (item_id) NOT NULL,
  particulate_types VARCHAR(800),
  particulate_size DECIMAL,
  temperature DECIMAL,
  additional_information VARCHAR(3000)
);
