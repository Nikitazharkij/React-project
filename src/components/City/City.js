import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderCity from './HeaderCity/HeaderCity';
import MainCity from './MainCity/MainCity'
import FooterCity from './FooterCity/FooterCity'
import MainCityPresent from './MainCity/MainCityPresent/MainCityPresent'
import MainCityPrint from './MainCity/MainCityPrint/MainCityPrint'
import MainCityTv from './MainCity/MainCityTv/MainCityTv'
import MainCityClock from './MainCity/MainCityClock/MainCityClock'

class City extends Component {

  render() {
    return (
      <div>
        <HeaderCity />
        <Route path = '/city/1'
          render = {() => <MainCity data = {this.props.data} />} />
        <Route path = '/city/print'
          render = {() => <MainCityPrint />} />
        <Route path = '/city/tv'
          render = {() => <MainCityTv />} />
        <Route path = '/city/present'
          render = {() => <MainCityPresent />} />
        <Route path = '/city/clock'
          render = {() => <MainCityClock />} />
        <FooterCity />
      </div>
    )
  }
}

export default City;