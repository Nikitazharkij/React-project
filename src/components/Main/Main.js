import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './Main.module.sass'
import MainMainPage from './MainMainPage/MainMainPage'
import MainSecondPage from './MainSecondPage/MainSecondPage'

const Main = (props) => {

  return (
    <BrowserRouter>
      <main>
        <Route exact path = '/'
          render = {() => <MainMainPage
          state = {props.state} />}
          />
        <Route path = '/city'
          render = {() => <MainSecondPage />}
          />
      </main>
    </BrowserRouter>
  )
}

export default Main;
