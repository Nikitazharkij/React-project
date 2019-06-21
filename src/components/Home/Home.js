import React, { Component } from 'react';
import HeaderHome from './HeaderHome/HeaderHome';
import MainHome from './MainHome/MainHome'
import FooterHome from './FooterHome/FooterHome'

const Home = (props) => {

  return (
    <div>
      <HeaderHome />
      <MainHome data = {props.data} />
      <FooterHome />
    </div>
  )
}

export default Home;