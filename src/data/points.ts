import faker from '@faker-js/faker';

import { NUMBER_OF_POINTS } from '../constants/constants';
import { Point } from '../interfaces/interfaces';

faker.seed(1);

const points: Point[] = [];

for (let i = 0; i < NUMBER_OF_POINTS; i++) {
  const lat: number = 55 + faker.datatype.number({min: 600, max: 900}) / 1000;
  const lng: number = 37 + faker.datatype.number({min: 400, max: 800}) / 1000;
  points.push({
    key: i,
    name: `Point_${i}`,
    latLng: [lat, lng],
  });
}

export default points;