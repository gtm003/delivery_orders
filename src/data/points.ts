import faker from '@faker-js/faker';

import { NUMBER_OF_POINTS } from '../constants/constants';
import { Point } from '../interfaces/interfaces';

faker.seed(123);

const points: Point[] = [];

for (let i = 0; i < NUMBER_OF_POINTS; i++) {
  const lat: number = faker.datatype.number({
    min: 55.6,
    max: 55.9,
    precision: 0.0001,
  });
  const lng: number = faker.datatype.number({
    min: 37.4,
    max: 37.8,
    precision: 0.0001,
  });
  points.push({
    key: i,
    name: `Point_${i}`,
    latLng: [lat, lng],
  });
}

export default points;
