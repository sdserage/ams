INSERT INTO valves (
  item_id,
  process,
  temperature,
  pressure,
  pipe_size,
  pipe_additional_information,
  additional_information
)
VALUES ($1, $2, $3, $4, $5, $6, $7);
