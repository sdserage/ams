CREATE TABLE actuators (
  item_id INT REFERENCES inquiry_items (item_id) NOT NULL,
  valve_size DECIMAL,
  valve_additional_information VARCHAR(3000),
  torque DECIMAL,
  return_type VARCHAR(30),
  stem_dimensions VARCHAR(30),
  stem_additional_information VARCHAR(3000),
  additional_information VARCHAR(3000)
);
