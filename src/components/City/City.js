import React from 'react';
import { Route } from 'react-router-dom';
import HeaderCity from './HeaderCity/HeaderCity';
import MainCity from './MainCity/MainCity'
import FooterCity from './FooterCity/FooterCity'
import MainCityPresent from './MainCity/MainCityPresent/MainCityPresent'

const City = (props) => {

  return (
    <div>
      <HeaderCity />
      <Route path = '/city/present'
        render = {() => <MainCityPresent />}
      />
      <Route path = '/city/1'
        render = {() => <MainCity data = {props.data} />}
      />
      <FooterCity />
    </div>
  )
}

export default City;