INSERT INTO actuators (
  item_id,
  valve_size,
  torque,
  valve_additional_information,
  return_type,
  stem_dimensions,
  stem_additional_information,
  additional_information
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
