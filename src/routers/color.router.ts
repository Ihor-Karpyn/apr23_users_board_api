import { Router } from 'express';
import { getAllColorsController } from '../controllers/color.controllers';

export const colorRouter = Router();

colorRouter.get('/', getAllColorsController)
