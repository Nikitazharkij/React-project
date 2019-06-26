import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import City from './components/City/City'

class Router extends Component {

  render() {
    return (
      <div>
        <Route exact path = '/'
          render = {() => <Home
          data = {this.props.data} />}
          />
        <Route path = '/city'
          render = {() => <City
          data = {this.props.data} />}
          />
      </div>
    )
  }
}

export default Router;
