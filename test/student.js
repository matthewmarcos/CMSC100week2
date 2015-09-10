var should = require('should-http');
var request = require('supertest');

describe('student', function() {
	var url = 'localhost:5000';
	describe('find', function() {
		it('should retrieve all student records', function(done) {
			request(url)
				.get('/students')
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					res.body.should.be.an.instanceOf(Array);
					// res.body.should.have.keys();

					done();
				});
		});
	});
	describe('insert', function() {
		it('should insert successfully', function(done) {
			request(url)
				.post('/students')
				.send({
					'studno': '2013-36122',
					'name': 'Joseph Matthew R. Marcos'
				})
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					console.log("STUFF");
					console.log(res.body);
					res.should.be.json
					// res.body.should.have.keys(['affectedRows']);
					res.body.should.have.property('affectedRows', 1);
					done();
				});
		});
		it('should not insert successfully', function(done) {
			request(url)
				.post('/students')
				.send({
					'studno': '2013-36122'
				})
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					console.log("STUFF");
					console.log(res.body);
					res.should.be.json
					// res.body.should.have.keys(['affectedRows']);
					res.body.should.have.property('affectedRows', 1);
					done();
				});
		});
		it('should not insert successfully', function(done) {
			request(url)
				.post('/students')
				.send({
					'name': 'Joseph Matthew R. Marcos'
				})
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					console.log("STUFF");
					console.log(res.body);
					res.should.be.json
					// res.body.should.have.keys(['affectedRows']);
					res.body.should.have.property('affectedRows', 1);
					done();
				});
		});
	});
});