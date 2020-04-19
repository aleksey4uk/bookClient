import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import InfoPage from '../pages/info';
import swapiService from '../services/swapi-service';
import './app.css';
import 'antd/dist/antd.css';
const SwapiService = new swapiService();

export default class App extends Component {
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
    return (
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <HomePage books={this.state.books}/>
          }}/>
          <Route
            exact
            path="/info"
            component={InfoPage}/>
          <Route
            path="/info/:id"
            render={({match, history}) => (
              <InfoPage
                history={history}
                id={match.params.id}
                books={this.state.books}
                />
              )}
            />
        </Switch>
      </div>
    )
  }
}
