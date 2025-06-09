import { DataSource } from 'typeorm';

/*
    Para usar o ormconfig, remova a configuração inline do DataSource e permita que o TypeORM leia as configurações do arquivo ormconfig.json ou ormconfig.ts na raiz do projeto.
    Exemplo de ormconfig.json:
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5437,
      "username": "admin",
      "password": "admin",
      "database": "postgres",
      "synchronize": true,
      "logging": false,
      "entities": ["src/entities/*.ts"],
      "migrations": ["src/migrations/*.ts"],
      "subscribers": []
    }
  */

// Para carregar automaticamente o ormconfig, basta instanciar o DataSource sem parâmetros:

export const AppDataSource = new DataSource({}); // TypeORM irá buscar o ormconfig automaticamente

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });
