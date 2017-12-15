DELETE from actuators a USING inquiry_items ii
WHERE a.item_id = ii.item_id AND ii.inquiry_id = $1;

DELETE from dust_collectors d USING inquiry_items ii
WHERE d.item_id = ii.item_id AND ii.inquiry_id = $1;

DELETE from instrumentations i USING inquiry_items ii
WHERE i.item_id = ii.item_id AND ii.inquiry_id = $1;

DELETE from valves v USING inquiry_items ii
WHERE v.item_id = ii.item_id AND ii.inquiry_id = $1;

DELETE from inquiry_items where inquiry_id = $1;

DELETE from inquiries where inquiry_id = $1;

SELECT * FROM inquiries
WHERE is_archived = FALSE
ORDER BY date DESC;
