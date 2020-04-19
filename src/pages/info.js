import React from 'react';
import { Card } from 'antd';
import { PageHeader } from 'antd';

const InfoPage = ({id, history, books}) => {
  let { data, img, deathData } = books.find(item=>item.key === +id);
  console.log(data)

  const styles = {
    marginLeft: -25,
    marginRight: -25,
    marginTop: -15
  }

  const styles2 = {
    marginLeft: -25,
    marginRight: -25,
    marginTop: 10,
    marginBottom: -25
  }


  return (
    <div className="cards">
      <PageHeader
        className="site-page-header cards-link"
        onBack={() => history.push('/')}
        title="Главная"
        subTitle="Вернуться к списку"
      />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example"
                src={img} />}
      >
        <Card type="inner" title="Дата рождения" style={styles}>
          {data}
        </Card>
        <Card type="inner" title="Дата смерти" style={styles2}>
          { deathData.length > 0 ? deathData : 'Жив и здоров' }
        </Card>
      </Card>
    </div>
  )
}

export default InfoPage;
