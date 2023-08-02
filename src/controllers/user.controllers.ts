import { Controller } from '../types';
import { UserService } from '../services/user.service';

const availableSortBy = ['id', 'name'];

export const getAllUsersController: Controller = async (req, res) => {
  const userService = new UserService();

  const {
    limit = 10,
    offset = 0,
    sortBy = 'id',
  } = req.query;

  const isSortByValid = typeof sortBy === 'string' && availableSortBy.includes(sortBy)
  const isLimitValid = !Number.isNaN(Number(limit));
  const isOffsetValid = !Number.isNaN(Number(offset));

  if (!isSortByValid || !isLimitValid || !isOffsetValid) {
    res.sendStatus(400);

    return;
  }

  const results = await userService.findAndCountAll({
    limit: Number(limit),
    offset: Number(offset),
    sortBy,
  });

  res.send(results);
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
