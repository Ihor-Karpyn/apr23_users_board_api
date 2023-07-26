import { Color } from '../models/Color.model';

export class ColorService {
  findById(id: number) {
    return Color.findByPk(id);
  }

  findAll() {
    return Color.findAll();
  }
}
