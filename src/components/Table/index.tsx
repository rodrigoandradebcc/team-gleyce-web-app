import React from 'react';
import { Table as TableAnt } from 'antd';
import * as S from './styles';

interface Props {
  dataSource: [];
  columns: [];
}

const Table: React.FC<Props> = ({ dataSource, columns }) => {
  return <TableAnt dataSource={dataSource} columns={columns} />;
};
