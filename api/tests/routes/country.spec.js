/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

    describe('GET /countries', () => {
    it('should get 200', () => agent.get('/countries').expect(200));
    it('responds with 200 when have a Id Query', () => { agent.get('/api/countries/arg').expect(200)});
    it('responds with 404 when have an invalid Query', () => { agent.get('/api/countries/argggg').expect(404)});

  });
});


