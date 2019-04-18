import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';
import db from '../models/db_store/db';

(() => {
  db.query(`DROP TABLE IF EXISTS note;
    CREATE TABLE IF NOT EXISTS note(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    note TEXT NOT NULL,
    date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`);
})();

chai.use(chaiHttp);

const should = chai.should();

describe('/POST Notes', () => {
  it('Create a new note', (done) => {
    chai
      .request(app)
      .post('/api/v1/note')
      .send({
        title: 'hi',
        note: 'new note'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('note');
        done();
      });
  });

  it('Return an error', (done) => {
    chai
      .request(app)
      .post('/api/v1/note')
      .send({
        title: '',
        note: ''
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.eql('Please provide a title and note body');
        done();
      });
  });
});

describe('/GET Notes', () => {
  it('Shoud return all the books', (done) => {
    chai
      .request(app)
      .get('/api/v1/note')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(1);
        done();
      });
  });
});

describe('/DELETE Notes', () => {
  it('Deletes existing notes', (done) => {
    chai
      .request(app)
      .delete('/api/v1/note/999')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        done();
      });
  });

  it('Return a 404', (done) => {
    chai
      .request(app)
      .delete('/api/v1/note/xxx')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        done();
      });
  });
});

describe('/EDIT Notes', () => {
  it('Edits a specific note', (done) => {
    chai
      .request(app)
      .patch('/api/v1/note/999')
      .send({
        title: 'hi',
        note: 'new note'
      })
      .end((err, res) => {
        res.should.have.status(202);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        done();
      });
  });

  it('Return a 404', (done) => {
    chai
      .request(app)
      .patch('/api/v1/note/999')
      .send({
        title: '',
        note: ''
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        done();
      });
  });
});
