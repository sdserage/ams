CREATE TABLE inquiries (
  inquiry_id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20),
  date DATE NOT NULL,
  is_test BOOLEAN DEFAULT FALSE,
  is_archived BOOLEAN DEFAULT FALSE
);
