var db = require(__dirname + '/../lib/mysql');

exports.find = function(req, res, next) {

	db.query('SELECT * FROM student', 
		function(err, rows) {
			if(err) {
				return next(err);
			}
			res.send(rows);
		});
};


exports.findOne = function(req, res, next) {

	var id = req.params.id;
	console.log(id);
	db.query('SELECT * FROM student where id = ?', 
		[req.params.id],
		function(err, rows) {
			if(err) {
				return next(err);
			}
			if(rows.length == 0) {
				res.status(404).send('Student Not found');
			}
			res.send(rows[0]);
		});
};


exports.insert = function(req, res, next) {

	var studno = req.body.studno;
	var name = req.body.name;
	console.log(studno + ' ' + name);
	db.query('INSERT INTO student(studno, name) VALUES(?,?)', 
		[req.body.studno, req.body.name],
		function(err, rows) {
			if(err) {
				return next(err);
			}
			res.send(rows);
		});
};


exports.update = function(req, res, next) {

	var studno = req.body.studno;
	var name = req.body.name;
	console.log(studno + ' ' + name);
	db.query('UPDATE student SET ? WHERE id=?', 
			[req.body, req.params.id],
		function(err, rows) {
			if(err) {
				return next(err);
			}
			res.send(rows);
		});
};


exports.remove = function(req, res, next) {

	console.log(studno + ' ' + name);
	db.query('DELETE FROM student WHERE id=?', 
			[req.params.id],
		function(err, rows) {
			if(err) {
				return next(err);
			}
			res.send(rows);
		});
};
