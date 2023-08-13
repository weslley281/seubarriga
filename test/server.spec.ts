import supertest from 'supertest';

const request = supertest('http://localhost:3001');

test('Deve responder na porta 3001', () => {
  request.get('/').then((response) => expect(response.status).toBe(200));
});
