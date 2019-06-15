import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import addisAbaba from './img/Africa/AddisAbaba.jpg'
import cairo from './img/Africa/Cairo.jpg'
import agra from './img/Asia/Agra.jpg'
import astana from './img/Asia/Astana.jpg'
import amsterdam from './img/Europa/Amsterdam.jpg'
import antalya from './img/Europa/Antalya.jpg'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <div className="container profile-cities">
          <div className="row">
              <div className="col-12 titleContinent">
                <p>AFRICA (2)</p>
              </div>
          </div>
          <div className="row lineCities">
            <div className="col-12 scrollCities">
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={addisAbaba} alt="AddisAbaba"/>
                </div>
                <div className="picCityText">
                  <span>ADDIS ABABA</span>
                </div>
              </div>
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={cairo} alt="Cairo"/>
                </div>
                <div className="picCityText">
                  <span>CAIRO</span>
                </div>
              </div>
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={addisAbaba} alt="AddisAbaba"/>
                </div>
                <div className="picCityText">
                  <span>ADDIS ABABA</span>
                </div>
              </div>
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={cairo} alt="Cairo"/>
                </div>
                <div className="picCityText">
                  <span>CAIRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container profile-cities">
          <div className="row">
              <div className="col-12 ttitleContinent">
                <p>ASIA (2)</p>
              </div>
          </div>
          <div className="row lineCities">
            <div className="scrollCities">
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={agra} alt="Agra"/>
                </div>
                <div className="picCityText">
                  <span>AGRA</span>
                </div>
              </div>
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={astana} alt="Astana"/>
                </div>
                <div className="picCityText">
                  <span>ASTANA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container profile-cities">
          <div className="row">
              <div className="col-12 titleContinent">
                <p>EUROPA (2)</p>
              </div>
          </div>
          <div className="row lineCities">
            <div className="scrollCities">
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={amsterdam} alt="Amsterdam"/>
                </div>
                <div className="picCityText">
                  <span>AMSTERDAM</span>
                </div>
              </div>
              <div className="picCityFrame">
                <div>
                  <img className="previewCity" src={antalya} alt="Antalya"/>
                </div>
                <div className="picCityText">
                  <span>ANTALYA</span>
                </div>
              </div>
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
