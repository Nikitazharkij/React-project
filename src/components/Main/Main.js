import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './Main.module.sass'
import MainFirstPage from './MainFirstPage/MainFirstPage'
import MainSecondPage from './MainSecondPage/MainSecondPage'

const Main = (props) => {

  return (
    <BrowserRouter>
      <main>
        <Route exact path = '/'
          render = {() => <MainFirstPage
          state = {props.state} />}
          />
        <Route path = '/city'
          render = {() => <MainSecondPage
          state = {props.state} />}
          />
      </main>
    </BrowserRouter>
  )
}

export default Main;
