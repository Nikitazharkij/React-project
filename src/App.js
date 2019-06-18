import React from 'react';
import './App.sass';
import state from './redux/state';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Main state = {state.continent} />
      <footer>
      </footer>
    </div>
  )
}

export default App;
