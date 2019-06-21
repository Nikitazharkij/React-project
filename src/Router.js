import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import City from './components/City/City'

const Router = (props) => {

  return (
    <div className = "app-wrapper">
      <Route exact path = '/'
        render = {() => <Home
        data = {props.data} />}
        />
      <Route path = '/city'
        render = {() => <City
        data = {props.data} />}
        />
    </div>
  )
}

export default Router;
