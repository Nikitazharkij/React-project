import React from 'react';
import './App.sass';
import Header from './components/Header/Header';

const App = (props) => {
  return (
    <div className = "app-wrapper">
      <Header />
      <main>
        <div className="container profile-cities">
          <div className="row ">
              <div className="col-12 t">
                <p>AFRICA (2)</p>
              </div>
          </div>
          <div className="row s">
            <div className="scroll-cities">
              <div>
                <img/>
              </div>
            </div>
          </div>
        </div>
        <div className="container profile-cities">
          <div className="row">
              <div className="col-12 t">
                <p>ASIA (2)</p>
              </div>
          </div>
          <div className="row">
              <div className="col-6 s">
              </div>
              <div className="col-6 s">
              </div>
          </div>
        </div>
        <div className="container profile-cities">
          <div className="row">
              <div className="col-12 t">
                <p>EUROPA (2)</p>
              </div>
          </div>
          <div className="row">
              <div className="col-6 s">
              </div>
              <div className="col-6 s">
              </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App;
