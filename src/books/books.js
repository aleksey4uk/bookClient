import React, {Component} from 'react';
import { Table, Tag, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import EditContact from '../edit-contact';
import swapiService from '../services/swapi-service';

const swapiService = new swapiService();

class Contacts extends Component {
  state {
    books: [],
    loading: true,
  }

  componentDidMount() {
    getData()
      .then((res)=>this.props.load(res))
      .then(()=>this.props.complete())
  }

  render() {
    let data;
    if(this.props.loading) return <h1>Загрузка</h1>
    const columns = [
      {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Эл. почта',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Номер телефона',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Действия',
        key: 'action',
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16}}
                onClick={() => this.props.edit(text)}>Изменить</a>
            <a onClick={() => this.props.remove(text)}>Удалить</a>
          </span>
        ),
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <EditContact />
      </div>
    )
  }
}
export default Contacts;
