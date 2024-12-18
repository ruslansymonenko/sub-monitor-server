import request from 'supertest';
import app from '../src/server';

describe('GET /hello', () => {
  let server: any;

  beforeAll((done) => {
    process.env.PORT = '4201';
    server = app.listen(4201, () => done());
  });

  afterAll((done) => {
    server.close(done);
  });
});
