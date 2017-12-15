SELECT * FROM inquiries
WHERE is_archived = FALSE
ORDER BY date DESC;

-- SELECT * FROM inquiries i JOIN inquiry_items ii
-- ON i.inquiry_id = ii.inquiry_id
-- WHERE is_archived = FALSE;
