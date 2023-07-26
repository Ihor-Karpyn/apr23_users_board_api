import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/user.router';
import { colorRouter } from './routers/color.router';
import { initAppRoutes } from './initAppRoutes';
import { initDB } from './initDB';

const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';

const serverInit = async () => {
  const app = express();

  app.use(cors({
    origin: CLIENT_URL,
  }));

  initDB();

  initAppRoutes(app);

  app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Api is ready on: http://localhost:${PORT}`)
  })
}

serverInit();



