import { Controller } from '../types';
import { ColorService } from '../services/color.service';

export const getAllColorsController: Controller = (req, res) => {
  const colorService = new ColorService();

  const colors = colorService.findAll();

  res.send(colors);
}
