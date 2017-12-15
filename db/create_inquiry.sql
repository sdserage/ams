INSERT INTO inquiries (name, email, phone_number, date)
VALUES ($1, $2, $3, $4)
RETURNING inquiry_id;
