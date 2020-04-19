import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const Books = (props) => {
  const columns = [
    {
      title: 'Наименование книги',
      dataIndex: 'bookName',
      key: 'bookName',
    },
    {
      title: 'Авторы',
      dataIndex: 'author',
      key: 'author',
      render: (text, record, index) => {
        return <Link to={`/info/${record.key}`}>{text}</Link>
      }
    },
    {
      title: 'Дата',
      dataIndex: 'dataBook',
      key: 'dataBook',
    },
  ];

  return (

    <div>
      <Table columns={columns} dataSource={props.books} />
    </div>
  )
}

export default Books;
