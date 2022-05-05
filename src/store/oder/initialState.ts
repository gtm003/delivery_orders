import React from 'react';
import orders from '../../data/orders';

const initialState = {
  currentOder: {
    ...orders[0],
    key: 0 as React.Key,
  },
};

export default initialState;
