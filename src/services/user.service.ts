import { User } from '../models/User.model';

type CreateOptions = Pick<User, 'name' | 'carColorId'>;

export class UserService {
  findById(id: number) {
    return User.findByPk(id);
  }

  create(options: CreateOptions) {
    return User.create(options);
  }

  findAll() {
    return User.findAll();
  }
}
