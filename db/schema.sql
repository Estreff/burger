DROP DATABASE IF EXISTS burger_db;

create database burger_db;

USE burger_db;

create table burgers (
	id int auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean,
    date timestamp,
    primary key(id)
);