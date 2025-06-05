import React from 'react';
import { Table } from 'antd';

const columns = [
{
title: 'S.N.',
dataIndex: 'sn',
},
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Stocks',
    dataIndex: 'stocks',
    align: 'center',
  },
  {
    title: 'CP(Rs.)',
    dataIndex: 'costPrice',
    align: 'center',
  },
  {
    title: 'SP(Rs.)',
    dataIndex:'sellingPrice',
  },
  {
    title:'Edit',
    dataIndex:'edit'
  },
  {
    title: 'Delete',
    dataIndex:'delete'
  },

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    stocks: '1000',
    costPrice: '200',
    sellingPrice:'500',
  },
];
const ProductColumns = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size='large'
    // title={() => 'Header'}
    // footer={() => 'Footer'}
  />
);
export default ProductColumns;