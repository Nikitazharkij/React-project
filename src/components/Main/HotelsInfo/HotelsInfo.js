import React, { Fragment } from 'react';
import style from './HotelsInfo.module.sass';
import CityHotelsPics from './CityHotelsPics/CityHotelsPics';


const HotelsInfo = (props) => {

  const hotelsBox = props.contentHotelsCity.map(hotelName =>
    <CityHotelsPics
      key = {hotelName.id}
      name = {hotelName.name}
      src = {hotelName.src}
      cost = {hotelName.cost} />
  )

  return (
    <Fragment>
      <div className={`container ${style.profileCities}`}>
        <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.data.spots.places.title} (${props.lengthList})`}</p>
          </div>
        </div>
        <div className={`row ${style.lineCities}`}>
          <div className={`col-12 ${style.scrollCities}`}>
            {hotelsBox}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HotelsInfo;