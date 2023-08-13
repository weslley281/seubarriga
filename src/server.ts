import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.status(200).send();
});

const port: number = 3001;

app.listen(port, () => {
  console.log(`The server is running on port http://localhost/${port}`);
});
