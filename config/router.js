var student = require('./../controllers/student.js'); 
var teachers = require('./../controllers/teacher.js'); 

module.exports = function(router) {
	router.route('/students')
		.post(student.insert)
		.get(student.find);
	router.route('/students/:id')
		.put(student.update)
		.delete(student.remove)
		.get(student.findOne);
	router.route('/teachers')
		.get(teachers.find)
		.post(teachers.add)
		.put(teachers.update)
		.delete(teachers.del);
	return router;
};
