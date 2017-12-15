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
JOIN instrumentations ins ON i.item_id = ins.item_id
WHERE inquiry_id = $1;
