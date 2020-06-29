insert into jumps (
date,
dropzone,
jump_number,
discipline,
details,
image
) values (
  $1,
  $2,
  $3,
  $4,
  $5, 
  $6
)

returning *