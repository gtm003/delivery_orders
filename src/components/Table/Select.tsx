import { Select } from 'antd';
import React from 'react';
import points from '../../data/points';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeOrderPoint } from '../../store/oder/orderSlice';

const { Option } = Select;

interface PointSelectProps {
  defaultValue: number;
  pointType: 'from' | 'to';
  orderKey: number;
}

interface OptionSelectProps {
  children: string;
}

const PointSelect: React.FC<PointSelectProps> = ({
  defaultValue,
  pointType,
  orderKey,
}) => {
  const dispatch = useAppDispatch();
  function onChange(value: number) {
    dispatch(
      changeOrderPoint({
        orderKey: orderKey,
        pointType: pointType,
        pointKey: value,
      })
    );
  }

  return (
    <Select
      showSearch
      style={{ minWidth: 100 }}
      defaultValue={defaultValue}
      optionFilterProp="children"
      filterOption={(input: string, option: any) =>
        option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA: OptionSelectProps, optionB: OptionSelectProps) =>
        optionA.children.localeCompare(optionB.children.toLowerCase())
      }
      onChange={onChange}
    >
      {points.map((point) => (
        <Option value={point.key} key={point.key}>
          {point.name}
        </Option>
      ))}
    </Select>
  );
};
export default PointSelect;
