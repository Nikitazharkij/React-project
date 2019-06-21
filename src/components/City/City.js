import React, { Component } from 'react';
import HeaderCity from './HeaderCity/HeaderCity';
import MainCity from './MainCity/MainCity'
import FooterCity from './FooterCity/FooterCity'

const City = (props) => {

  return (
    <div>
      <HeaderCity />
      <MainCity data = {props.data} />
      <FooterCity />
    </div>
  )
}

export default City;