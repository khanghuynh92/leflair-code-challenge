//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index.js');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Add', () => {

  describe('/POST add', () => {
	  it('it should not POST a add calculation without a field', (done) => {
	  	let cal = {
	  		value1: 1,
	  	}

			chai.request(server)
		    .post('/api/cal/add')
		    .send(cal)
		    .end((err, res) => {
			  	res.should.have.status(400);

			  	res.body.should.have.property('code');
			  	res.body.should.have.property('message');
			  	res.body.should.have.property('validationErrors');
		      done();
		    });
	  });

    it('it should POST a addition calculation: 5 + 10', (done) => {
	  	const cal = {
	  		value1: 5,
	  		value2: 10,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(15);
        done();
      });
	  });

    it('it should POST a addition calculation 5129 + 12388', (done) => {
	  	const cal = {
	  		value1: 5129,
	  		value2: 12388,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(17517);
        done();
      });
	  });

    it('it should POST a addition calculation -2341 + 1243', (done) => {
	  	const cal = {
	  		value1: -2341,
	  		value2: 1243,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(-1098);
        done();
      });
	  });

    it('it should POST a addition calculation 0 + 951', (done) => {
	  	const cal = {
	  		value1: 0,
	  		value2: 951,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(951);
        done();
      });
	  });

    it('it should POST a addition calculation -414 + -125', (done) => {
	  	const cal = {
	  		value1: -414,
	  		value2: -125,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(-539);
        done();
      });
	  });

    it('it should POST a addition calculation 0 + 0', (done) => {
	  	const cal = {
	  		value1: 0,
	  		value2: 0,
	  	}

			chai.request(server)
      .post('/api/cal/add')
      .send(cal)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('code');
        res.body.should.have.property('result').eql(0);
        done();
      });
	  });

  });

});
