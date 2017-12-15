UPDATE inquiries SET is_archived = TRUE WHERE inquiry_id = $1
RETURNING *;
