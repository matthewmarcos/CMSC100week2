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
					// res.body.should.be.an.instanceOf(Array).and.have.lengthOf(7);
					done();
				});
		});
	});
	describe('find', function() {
		it('should retrieve all student records', function(done) {
			request(url)
				.post('/students')
				.send({
					'studno': '2013-36122',
					'name': "<script> alert('Hi'); </script>"
				})
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					res.should.be.json
					done();
				});
		});
	});
});