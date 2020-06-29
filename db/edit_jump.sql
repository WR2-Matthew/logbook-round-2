-- not sure this how you do update in an sql file but we can check.
update jumps
set date = $1, dropzone = $2, jump_number = $3, discipline = $4, details = $5, image = $6
where jump_id = $7;

select * from jumps
