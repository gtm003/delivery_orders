import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../interfaces/interfaces';

import initialState from './initialState';

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeCurrentOrder(state, action: PayloadAction<Order>) {
      //console.log(action.payload);
      state.currentOder = action.payload;
      console.log(state.currentOder);
    },
  },
});
export const { changeCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
