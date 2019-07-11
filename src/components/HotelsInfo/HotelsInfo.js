import React from 'react';
import style from './HotelsInfo.module.sass';
import CityHotelsPics from './CityHotelsPics/CityHotelsPics';


const HotelsInfo = (props) => {

  const hotelsCount = props.data.hotels.length;

  const hotelsBox = props.data.hotels.map(hotelContent =>
    <CityHotelsPics
      key = {hotelContent.id}
      cityName = {props.data.name}
      continentId={props.data.continentId}
      hotelContent = {hotelContent} />
  )

  return (
      <div className={`container ${style.profileCities}`}>
        <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`Where to live (${hotelsCount})`}</p>
          </div>
        </div>
        <div className={`row ${style.lineCities}`}>
          <div className={`col-12 ${style.scrollCities}`}>
            {hotelsBox}
          </div>
        </div>
      </div>
  )
}

export default HotelsInfo;