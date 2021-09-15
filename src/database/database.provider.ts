import { Sequelize } from 'sequelize';
import { Products } from '../model/Products';
import { config } from 'dotenv';
config();
export const sequelizeConfig = new Sequelize({
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_HOST) || 5432,
  dialect: 'postgres',
  sync: {
    force: true,
  },
});
