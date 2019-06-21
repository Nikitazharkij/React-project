import React from 'react';
import s from './MainCity.module.sass'
import PicsCityPlaces from './PicsCityPlaces/PicsCityPlaces'
import DescriptionCity from './DescriptionCity/DescriptionCity'

const MainCity = (props) => {

  let descriptionCity = <DescriptionCity
    country = "Amsterdam"
    name = "Royal Palace"
    descriptionCity = {props.data.africa[0].description} />

  let placesOfCity = props.data.africa[0].places.map (
    p => <PicsCityPlaces
    key = {p.name}
    name = {p.name}
    src = {p.src}
    type = {p.type} />
  )

  let hotelOfCity = props.data.africa[0].hotels.map (
    p => <PicsCityPlaces
    key = {p.name}
    name = {p.name}
    src = {p.src}
    type = {p.type} />
  )
  return (
    <div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>AMSTERDAM, NETHERLANDS</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {descriptionCity}
          </div>
        </div>
      </div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>WHAT TO SEE</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {placesOfCity}
          </div>
        </div>
      </div>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>WHERE TO LIVE</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {hotelOfCity}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCity;