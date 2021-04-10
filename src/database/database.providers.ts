import { Sequelize } from 'sequelize-typescript';
import { History } from '../history/history.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: 'sql2020',
        database: 'master',
      });
      sequelize.addModels([History]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
