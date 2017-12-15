INSERT INTO inquiry_items (inquiry_id, item_type)
VALUES ($1, $2)
RETURNING item_id, item_type;
