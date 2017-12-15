INSERT INTO dust_collectors (
  item_id,
  particulate_types,
  particulate_size,
  temperature,
  additional_information
)
VALUES ($1, $2, $3, $4, $5);
