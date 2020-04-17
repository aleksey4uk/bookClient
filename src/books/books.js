import React, {Component} from 'react';
import { Table, Tag, Button } from 'antd';
import { Redirect } from 'react-router-dom';
//import EditContact from '../edit-contact';
import swapiService from '../services/swapi-service';

const SwapiService = new swapiService();

export default class Books extends Component {
  state = {
    books: [],
    loading: true,
  }

  componentDidMount() {
    const { getBooks } = SwapiService;
    getBooks()
      .then((res) => {
        this.setState({
          books: res,
          loading: false,
        })
      })
  }

  render() {
    if(this.state.loading) return <h1>Загрузка</h1>;
    const columns = [
      {
        title: 'Наименование книги',
        dataIndex: 'bookName',
        key: 'bookName',
        id: 1,
        render: text => <a>{text}</a>,
      },
      {
        title: 'Авторы',
        id: 2,
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Дата',
        dataIndex: 'data',
        id: 3,
        key: 'data',
      },
/*      {
        title: 'Действия',
        key: 'action',
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16}}
                onClick={() => this.props.edit(text)}>Изменить</a>
            <a onClick={() => this.props.remove(text)}>Удалить</a>
          </span>
        ),
      },*/
    ];

    const data = [
      {
        bookName: 'Vasilii',
        author: 'vasili, veron, nick marty',
        data: '12.13.14',
        id: 1
      }
    ];

    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
