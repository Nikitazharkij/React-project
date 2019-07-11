import React from 'react';
import style from './HotelsInfo.module.sass';
import CityHotelsPics from './CityHotelsPics/CityHotelsPics';


const HotelsInfo = (props) => {

  const contentHotelsCity = props.data.hotel.description;
  const lengthList = contentHotelsCity.length;

  const hotelsBox = contentHotelsCity.map(hotelName =>
    <CityHotelsPics
      key = {hotelName.id}
      cityName = {props.data.city}
      continentName={props.continentName}
      hotelName = {hotelName} />
  )

  return (
      <div className={`container ${style.profileCities}`}>
        <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.data.place.title} (${lengthList})`}</p>
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