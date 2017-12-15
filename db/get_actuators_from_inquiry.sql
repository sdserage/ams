SELECT
    inquiry_id,
    i.item_id,
    item_type,
    valve_size,
    valve_additional_information,
    torque,
    return_type,
    stem_dimensions,
    stem_additional_information,
    additional_information
FROM inquiry_items i
JOIN actuators a ON i.item_id = a.item_id
WHERE inquiry_id = $1;
