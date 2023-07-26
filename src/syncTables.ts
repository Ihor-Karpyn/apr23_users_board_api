import { initDB } from './initDB';
import { Color } from './models/Color.model';

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

  await Color.sync({ alter: true });

  console.log('[Color]: ✅')

  console.log('Start data seeding');

  await Promise.all(colors.map((color) => Color.create(color)));

  console.log(`All models & data was synced successfully 📡📡📡`)
}

syncTables();
