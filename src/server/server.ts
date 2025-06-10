import express from 'express';
import 'reflect-metadata';
import '../shared/container';

import { router } from '../routes';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { AppDataSource } from '../database/data-source';
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source initialized!');
    // start server etc
  })
  .catch((err) => {
    console.error('Error initializing Data Source:', err);
  });

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Servidor Express rodandoasdasds!');
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
