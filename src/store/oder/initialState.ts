import orders from '../../data/orders';

const initialState = {
  orders: orders,
  selectedOrderId: 0,
  isRouteLoading: false,
  isErrorOccured: false,
};

export default initialState;
