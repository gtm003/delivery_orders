import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import orders from '../../data/orders';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Order, Point } from '../../interfaces/interfaces';
import { changeCurrentOrder } from '../../store/oder/orderSlice';

const OrdersTable: React.FC = () => {
  console.log(orders);
  const dispatch = useAppDispatch();

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
      render: (from: Point) => (
        <div style={{ minWidth: 150 }}>{from.name}</div>
      ),
    },
    {
      title: 'Точка разгрузки',
      dataIndex: 'to',
      key: 'to',
      render: (to: Point) => (
        <div style={{ minWidth: 150 }}>{to.name}</div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Order[]) => {
      dispatch(changeCurrentOrder(selectedRows[0]));
    },
  };

  return (
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
  );
};

export default OrdersTable;
