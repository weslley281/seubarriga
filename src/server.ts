import { app } from './app';

const port: number = 3001;

app.listen(port, () => {
  console.log(`The server is running on port http://localhost/${port}`);
});
