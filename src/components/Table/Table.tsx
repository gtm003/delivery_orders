import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
//import orders from '../../data/orders';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Order, Point } from '../../interfaces/interfaces';
import { changeCurrentOrder } from '../../store/oder/orderSlice';
import PointSelect from './Select';
import './Table.css';

const OrdersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.order.orders);

  const columns: ColumnsType<Order> = [
    {
      title: '№ Заявки',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div style={{ minWidth: 150 }}>{text}</div>,
    },
    {
      title: 'Точка погрузки',
      dataIndex: 'from',
      key: 'from',
      render: (from: Point, record: Order) => (
        <PointSelect defaultValue={from.key} pointType="from" orderKey={record.key} />
      ),
    },
    {
      title: 'Точка разгрузки',
      dataIndex: 'to',
      key: 'to',
      render: (to: Point, record: Order) => (
        <PointSelect defaultValue={to.key} pointType="to" orderKey={record.key} />
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Order[]) => {
      dispatch(changeCurrentOrder(selectedRows[0]));
    },
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={orders}
        size="small"
        pagination={false}
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
      />
    </>
  );
};

export default OrdersTable;
