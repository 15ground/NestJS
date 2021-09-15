import { config } from 'dotenv';

config();

export const databaseConfig = {
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_HOST) || 5432,
  dialect: 'postgres',
  logging: console.log,
  force: true,
  timezone: '+07:00',
};
