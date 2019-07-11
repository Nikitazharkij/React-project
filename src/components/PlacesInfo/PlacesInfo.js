import React from 'react';
import style from './PlacesInfo.module.sass';
import CityPlacesPics from './CityPlacesPics/CityPlacesPics';


const PlacesInfo = (props) => {

  const placesCount = props.data.places.length;

  const placesBox = props.data.places.map(placeContent =>
    <CityPlacesPics
      key = {placeContent.id}
      cityName = {props.data.name}
      continentId={props.data.continentId}
      placeContent = {placeContent} />
  )

  return (
    <div className={`container ${style.profileCities}`}>
      <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`What to see (${placesCount})`}</p>
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

export default PlacesInfo;