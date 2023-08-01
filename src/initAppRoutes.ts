import { userRouter } from './routers/user.router';
import { colorRouter } from './routers/color.router';
import { Express } from 'express';

export const initAppRoutes = (ap: Express) => {
  ap.use('/users', userRouter);

  ap.use('/colors', colorRouter)
}
