import { Sequelize } from 'sequelize-typescript';
import { Products } from '../model/Products';
import { databaseConfig } from '../share/database';

export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    const sequelize = new Sequelize({
      username: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_HOST) || 5432,
      dialect: 'postgres',
    });
    console.log(process.env);
    sequelize.addModels([Products]);
    return sequelize;
  },
};
