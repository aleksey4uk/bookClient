import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Books from '../contacts';

class HomePage extends Component {
  render() {
    return <Redirect to="/books"/>
  }
}

export default HomePage;
