import express from 'express';
import cors from 'cors';
import { initAppRoutes } from './initAppRoutes';
import { initDB } from './initDB';
import dotenv from 'dotenv';

const serverInit = async () => {
  dotenv.config();

  const PORT = process.env.PORT;
  const CLIENT_URL = process.env.CLIENT_URL;
  const API_URL = `${process.env.API_URL}:${PORT}`;

  const app = express();

  app.use(cors({
    origin: CLIENT_URL,
  }));

  initDB();

  initAppRoutes(app);

  app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Api is ready on: ${API_URL}`)
  })
}

serverInit();



