CREATE TABLE inquiry_items (
  item_id SERIAL PRIMARY KEY NOT NULL,
  inquiry_id INT REFERENCES inquiries (inquiry_id) NOT NULL,
  item_type VARCHAR(10) NOT NULL
);
