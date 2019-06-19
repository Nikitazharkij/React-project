import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './Header.module.sass'
import HeaderFirstPage from './HeaderFirstPage/HeaderFirstPage';
import HeaderSecondPage from './HeaderSecondPage/HeaderSecondPage';

const Header = (props) => {

  return (
    <BrowserRouter>
      <header>
        <Route exact path = '/'
          render = {() => <HeaderFirstPage />}
          />
        <Route path = '/city'
          render = {() => <HeaderSecondPage />}
          />
      </header>
    </BrowserRouter>
  )
}

export default Header;
