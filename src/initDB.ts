import { Sequelize } from 'sequelize-typescript';
import { models } from './models';

export const initDB = () => {
  const DB_URI = process.env.DB_URI || '';

  return new Sequelize(
    DB_URI,
    {
      models,
      dialectOptions: {
        ssl: true,
      }
    }
  )
}
