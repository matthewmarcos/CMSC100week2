CREATE TABLE student (
	id int AUTO_INCREMENT, 
	studno varchar(10),
	name varchar(30),
	PRIMARY KEY(id)
);

INSERT INTO student (studno, name) VALUES ('2013-36285', 'Matthew Marcos');

INSERT INTO student (studno, name) VALUES ('2013-12345', 'John Dope');

INSERT INTO student (studno, name) VALUES ('2011-96875', 'Jonathan Law');

INSERT INTO student (studno, name) VALUES ('2011-96875', 'Celyne Zarraga');

UPDATE student SET name='Updated Name' WHERE id=2;

UPDATE student SET name='Updated Name AGAIN', studno='new SN' WHERE id=2;
