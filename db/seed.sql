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

-- many to many pattern...many rows in Topic table can relate to many rows in Deck table. Junction tables are a common approach to this pattern.

create table topic (
    topic_id serial primary key,
    topic varchar(50)
);

create table deck (
    deck_id serial primary key,
    title varchar(50),
    description varchar(750),
    cover_photo text
);

create table deck_topics (
    deck_id int references deck(deck_id),
    topic_id int references topic(topic_id)
);

-- Example of subqueries. This allows do add conditions from another table to determine what is recieved from the main table.

select title from deck
where deck_id in (select deck_id from deck_topics
where topic_id = $1)