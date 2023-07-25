import { Controller, User } from '../types';
import { UserService } from '../services/user.service';
import { ColorService } from '../services/color.service';

export const getAllUsersController: Controller = (_, res) => {
  const userService = new UserService();

  const users = userService.findAll();

  res.send(users);
}

export const getUserByIdController: Controller = (req, res) => {
  const userService = new UserService();

  const { userId: initialUserId } = req.params;
  const userId = Number(initialUserId);

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const user = userService.findById(userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
}

export const CreateUserController: Controller = (req, res) => {
  const { carColorId, name } = req.body;

  const colorService = new ColorService();
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

  const color = colorService.findById(carColorId);

  if (!color) {
    res.statusCode = 404;
    res.send({
      error: 'color not found'
    })

    return;
  }

  const newUser = userService.create({ carColorId, name })

  res.statusCode = 201;
  res.send(newUser);
}
