import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import '../shared/container';

import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { ApError } from '../errors/AppErros';
import { router } from '../routes';
import { AppDataSource } from '../database/data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source initialized!');
  })
  .catch((err) => {
    console.error('Error initializing Data Source:', err);
  });

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

// ✅ Middleware de erro separado
const errorMiddleware = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  if (err instanceof ApError) {
    return response.status(err.statusCode).json({
      mensagem: err.message,
    });
  }

  return response.status(500).json({
    mensagem: `Internal server error - ${err.message}`,
  });
};

// ✅ Passando o middleware explicitamente
app.use(errorMiddleware);

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Servidor Express rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
