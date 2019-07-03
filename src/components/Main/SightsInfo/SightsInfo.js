import React from 'react';
import style from './SightsInfo.module.sass';
import CityPlacesPics from './CityPlacesPics/CityPlacesPics';


const SightsInfo = (props) => {

  const placesBox = props.contentPlacesCity.map(placeName =>
    <CityPlacesPics
      key = {placeName.id}
      name = {placeName.name}
      src = {placeName.src}
      info = {placeName.info} />
  )

  return (
    <div className={`container ${style.profileCities}`}>
      <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.data.spots.places.title} (${props.lengthList})`}</p>
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