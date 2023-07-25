import express, { Router } from 'express';
import {
  CreateUserController,
  getAllUsersController,
  getUserByIdController
} from '../controllers/user.controllers';

export const userRouter = Router();

userRouter.get('/', getAllUsersController);

userRouter.post('/', express.json(),  CreateUserController);

userRouter.get('/:userId', getUserByIdController);

