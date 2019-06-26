import React, { Component } from 'react';
import HeaderHome from './HeaderHome/HeaderHome';
import MainHome from './MainHome/MainHome'
import FooterHome from './FooterHome/FooterHome'

class Home extends Component {

  render() {
    return (
      <div>
        <HeaderHome />
        <MainHome data = {this.props.data} />
        <FooterHome />
      </div>
    )
  }
}

export default Home;