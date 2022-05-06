import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import points from '../../data/points';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Order } from '../../interfaces/interfaces';

import initialState from './initialState';

interface changeOrderPointProps {
  orderKey: number;
  pointType: 'from' | 'to';
  pointKey: number;
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeCurrentOrder(state, action: PayloadAction<Order>) {
      state.selectedOrderId = action.payload.key;
    },
    changeOrderPoint(state, action: PayloadAction<changeOrderPointProps>) {
      state.orders[action.payload.orderKey - 1][action.payload.pointType] =
        points[action.payload.pointKey];
    },
  },
});
export const useSelectedOrder = () =>
  useAppSelector(
    (state) => state.order.orders[state.order.selectedOrderId - 1]
  );
export const { changeCurrentOrder, changeOrderPoint } = orderSlice.actions;
export default orderSlice.reducer;
