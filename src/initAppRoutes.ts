import { userRouter } from './routers/user.router';
import { colorRouter } from './routers/color.router';
import { Express } from 'express';

export const initAppRoutes = (app: Express) => {
  app.use('/users', userRouter);

  app.use('/colors', colorRouter)
}
