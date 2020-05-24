-- vv one to one pattern...one row in User table relates to one row in Email table

create table user (
    user_id serial primary key,
    username varchar(100),
    password varchar(300)
)

create table email (
    user_id integer references user(user_id)
    email varchar(200)
)

-- vv one to many pattern...one row in User table relates to many rows in Entries

create table user (
user_id serial primary key,
email varchar(200),
username varchar(50),
password text
);

create table entries (
entry_id serial primary key,
title varchar(100),
content text,
date varchar(20),
author_id integer REFERENCES user(user_id)
);

-- many to many pattern...