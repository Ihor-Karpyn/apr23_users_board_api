import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/user.router';
import { colorRouter } from './routers/color.router';

const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';

const app = express();

app.use(cors({
  origin: CLIENT_URL,
}));

app.use('/users', userRouter);

app.use('/colors', colorRouter)

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Api is ready on: http://localhost:${PORT}`)
})


