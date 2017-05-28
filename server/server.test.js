const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server Req Tests', function () {
  describe('#route "/"', () => {
    it('should return correct response for "/"', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page Not Found!',
            name: 'My App'
          });
        })
        .end(done);
    });
  });
  describe('#route "/users"', () => {
    it('should return correct response for "/users"', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Jim',
            age: 22
          });
        }
      )
      .end(done);
    });
  });
});
