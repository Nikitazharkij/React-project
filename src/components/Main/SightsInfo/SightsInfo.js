import React from 'react';
import style from './SightsInfo.module.sass';
import CityPlacesPics from './CityPlacesPics/CityPlacesPics';


const SightsInfo = (props) => {

  const placesBox = props.contentPlacesCity.map(placeName =>
    <CityPlacesPics
      key = {placeName.id}
      cityName = {props.data.city}
      continentName={props.continentName}
      placeName = {placeName.name}
      src = {placeName.src}
      type = {placeName.type} />
  )

  return (
    <div className={`container ${style.profileCities}`}>
      <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.data.spots.place.title} (${props.lengthList})`}</p>
          </div>
      </div>
      <div className={`row ${style.lineCities}`}>
        <div className={`col-12 ${style.scrollCities}`}>
          {placesBox}
        </div>
      </div>
    </div>
  )
}

export default SightsInfo;