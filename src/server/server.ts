import express from 'express';

import { route } from '../routes';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { AppDataSource } from '../database';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(route);

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Servidor Express rodandoasdasds!');
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
