import React from 'react';
import s from './MainHome.module.sass'
import PicsCity from './PicsCity/PicsCity'

const MainHome = (props) => {

  let picsCityElementAfrica = props.data.africa.map (
    p => <PicsCity key = {`${p.country}${p.id}`}
                   country = {p.country}
                   src = {p.src}
                   city = {p.city} />
  )

  let picsCityElementAsia = props.data.asia.map (
    p => <PicsCity key = {`${p.country}${p.id}`}
                   country = {p.country}
                   src = {p.src}
                   city = {p.city} />
  )

  let picsCityElementEurope = props.data.europe.map (
    p => <PicsCity key = {`${p.country}${p.id}`}
                   country = {p.country}
                   src = {p.src}
                   city = {p.city} />
  )

  return (
    <div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>AFRICA</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {picsCityElementAfrica}
          </div>
        </div>
      </div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>ASIA</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {picsCityElementAsia}
          </div>
        </div>
      </div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>EUROPE</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {picsCityElementEurope}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome;
