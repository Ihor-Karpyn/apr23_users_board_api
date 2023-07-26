import { Controller } from '../types';
import { UserService } from '../services/user.service';

export const getAllUsersController: Controller = async (_, res) => {
  const userService = new UserService();

  const users = await userService.findAll();

  res.send(users);
}

export const getUserByIdController: Controller = async (req, res) => {
  const userService = new UserService();

  const { userId: initialUserId } = req.params;
  const userId = Number(initialUserId);

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const user = await userService.findById(userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
}

export const CreateUserController: Controller = async (req, res) => {
  const { carColorId, name } = req.body;

  const userService = new UserService();

  const isDataValid = (
    Boolean(carColorId)
    && Boolean(name)
    && typeof carColorId === 'number'
    && typeof name === 'string'
  )

  if (!isDataValid) {
    res.sendStatus(422);

    return;
  }

  const newUser = await userService.create({ carColorId, name })

  res.statusCode = 201;
  res.send(newUser);
}
