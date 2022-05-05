import faker from '@faker-js/faker';

import { NUMBER_OF_ORDERS } from '../constants/constants';
import { Order } from '../interfaces/interfaces';
import points from './points';

faker.seed(123);

const orders: Order[] = [];

for (let i = 0; i < NUMBER_OF_ORDERS; i++) {
  const from = faker.helpers.arrayElement(points);
  const pointsWithoutFrom = points.filter((point) => point !== from);

  orders.push({
    key: i + 1,
    name: `Order_${i + 1}`,
    from : from,
    to: faker.helpers.arrayElement(pointsWithoutFrom),
  });
}

export default orders;