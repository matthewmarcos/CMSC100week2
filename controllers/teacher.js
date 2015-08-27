exports.find = function(req, res, next) {
	res.send({
		message: "View Teachers"
	});
};


exports.add = function(req, res, next) {
	res.send("Add Teachers");
};


exports.update = function(req, res, next) {
	res.send("Update Teachers");
};


exports.del = function(req, res, next) {
	res.send("Delete Teachers");
};
