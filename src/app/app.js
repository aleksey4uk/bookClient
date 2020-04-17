import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import InfoPage from '../pages/info';
import './app.css';
import 'antd/dist/antd.css';

const App = (props) => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route patch="/info" component={InfoPage} />
      </Switch>
    </div>
  )
}

export default App;
