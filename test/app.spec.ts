import supertest from 'supertest';
import { app } from '../src/app';

const request = supertest(app);

describe('Deve responder na raiz', () => {
  it('Deve retornar o status 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
