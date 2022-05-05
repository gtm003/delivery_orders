import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import orders from '../../data/orders';
import { Order, Point } from '../../interfaces/interfaces';

const RequestsTable: React.FC = () => {
  console.log(orders);

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
      console.log(selectedRows);
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

export default RequestsTable;
