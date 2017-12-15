SELECT
    inquiry_id,
    i.item_id,
    item_type,
    particulate_types,
    particulate_size,
    temperature,
    additional_information
FROM inquiry_items i
JOIN dust_collectors d ON i.item_id = d.item_id
WHERE inquiry_id = $1;
