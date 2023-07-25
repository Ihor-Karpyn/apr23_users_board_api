import { User } from '../types';
import { getNewId } from '../helpers';

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

type CreateOptions = Pick<User, 'name' | 'carColorId'>;

export class UserService {
  findById(id: number) {
    return users.find(user => user.id === id);
  }

  create(options: CreateOptions) {
    const newId = getNewId(users);

    const newUser: User = {
      id: newId,
      ...options,
    }


    users.push(newUser);

    return newUser;
  }

  findAll() {
    return users;
  }
}
