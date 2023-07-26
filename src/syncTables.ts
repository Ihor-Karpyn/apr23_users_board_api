import { initDB } from './initDB';
import { Color } from './models/Color.model';
import { models } from './models';

const colors = [
  { name: 'Black' },
  { name: 'DeepPink' },
  { name: 'Red' },
  { name: 'Aquamarine' },
  { name: 'Gold' },
  { name: 'YellowGreen' },
  { name: 'Yellow' },
];

const syncTables = async () => {
  initDB();

  await Promise.all(models.map(Model => (
    Model.sync({ alter: true }).then(() => console.log(`[${Model.name}]: ✅`))
  )))

  console.log('Start data seeding');

  await Promise.all(colors.map((color) => Color.create(color)));

  console.log(`All models & data was synced successfully 📡📡📡`)
}

syncTables();
