import { Sequelize } from 'sequelize-typescript';
import { models } from './models';

const URI = 'postgres://igor82200:QWErty11223344@ep-mute-glade-94644838.eu-central-1.aws.neon.tech/neondb'

export const initDB = () => {
  return new Sequelize(
    URI,
    {
      models,
      dialectOptions: {
        ssl: true,
      }
    }
  )
}
