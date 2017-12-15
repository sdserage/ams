UPDATE inquiries SET is_archived = false WHERE inquiry_id = $1
RETURNING *;
