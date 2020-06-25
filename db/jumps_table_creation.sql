create table jumps (
jump_id serial primary key,
person_id int,
foreign key (person_id) references users(user_id),
date int,
dropzone varchar(100),
jump_number int,
discipline varchar(30),
details varchar(3000),
image varchar(5000)
);