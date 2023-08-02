import { User } from '../models/User.model';

type CreateOptions = Pick<User, 'name' | 'carColorId'>;

interface FindAllOptions {
  limit?: number;
  offset?: number;
  sortBy?: string;
}

export class UserService {
  findById(id: number) {
    return User.findByPk(id);
  }

  create(options: CreateOptions) {
    return User.create(options);
  }

  findAndCountAll(options: FindAllOptions = {}) {
    const {
      limit,
      offset,
      sortBy = 'id',
    } = options;

    console.log(sortBy)

    return User.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']],
    });
  }
}
