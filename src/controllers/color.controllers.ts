import { Controller } from '../types';
import { ColorService } from '../services/color.service';

export const getAllColorsController: Controller = async (req, res) => {
  const colorService = new ColorService();

  const colors = await colorService.findAll();

  res.send(colors);
}
