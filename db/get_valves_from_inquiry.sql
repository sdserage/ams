SELECT
    inquiry_id,
    i.item_id,
    item_type,
    process,
    temperature,
    pressure,
    pipe_size,
    pipe_additional_information,
    additional_information
FROM inquiry_items i
JOIN valves v ON i.item_id = v.item_id
WHERE inquiry_id = $1;
