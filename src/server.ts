import express from 'express';
import cors from 'cors';
import { getNewId } from './helpers';
import { User } from './types';
import { type } from 'os';

const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';

const app = express();

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

app.use(cors({
  origin: CLIENT_URL,
}));

app.get('/users', (req, res) => {
  res.send(users);
})

app.get('/users/:userId', (req, res) => {
  const { userId: initialUserId } = req.params;
  const userId = Number(initialUserId);

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const user = users.find(user => user.id === userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
})

app.post('/users', express.json(),  (req, res) => {
  const { carColorId, name } = req.body;

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

  const color = colors.find(({ id }) => id === carColorId);

  if (!color) {
    res.statusCode = 404;
    res.send({
      error: 'color not found'
    })

    return;
  }

  const newId = getNewId(users);

  const newUser: User = {
    id: newId,
    name,
    carColorId: color.id,
  }


  users.push(newUser);

  console.log('---###--------User created---------###---');
  console.log(users);
  console.log('---###--------------------###---');

  res.statusCode = 201;
  res.send(newUser);
})

app.get('/colors', (req, res) => {
  res.send(colors);
})

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Api is ready on: http://localhost:${PORT}`)
})


