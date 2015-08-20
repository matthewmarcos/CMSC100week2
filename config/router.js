var student = require('./../controllers/student.js'); 
var teachers = require('./../controllers/teacher.js'); 

module.exports = function(router) {
	router.route('/students')
		.get(student.find);
	router.route('/teachers')
		.get(teachers.find)
		.post(teachers.add)
		.put(teachers.update)
		.delete(teachers.del);
	return router;
};