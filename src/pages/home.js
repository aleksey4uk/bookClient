import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Books from '../books';

class HomePage extends Component {
  render() {
    return <Books/>
  }
}

export default HomePage;
