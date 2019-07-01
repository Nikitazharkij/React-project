import React, { Fragment } from 'react';
import style from './MainCity.module.sass';
import PicsCityPlaces from './../../components/Main/PicsCityPlaces/PicsCityPlaces';
import PicsCityHotels from './../../components/Main/PicsCityHotels/PicsCityHotels';
import DescriptionCity from './../../components/Main/DescriptionCity/DescriptionCity';

const MainCity = (props) => {

  const data = props.data.europe[0];
  const contentPlacesCity = data.spots.places.description;
  const contentHotelsCity = data.spots.hotels.description;
  const lengthList = contentPlacesCity.length;

  const descriptionCity = <DescriptionCity
    descriptionCity = {data.description}
    descriptionCityShort = {data.descriptionShort}/>

  const placesBox = contentPlacesCity.map(namePlace =>
    <PicsCityPlaces
      key = {namePlace.id}
      name = {namePlace.name}
      src = {namePlace.src}
      info = {namePlace.info} />
  )

  const hotelsBox = contentHotelsCity.map(nameHotel =>
    <PicsCityHotels
      key = {nameHotel.id}
      name = {nameHotel.name}
      src = {nameHotel.src}
      cost = {nameHotel.cost} />
  )

  return (
    <Fragment>
      <div className={`container ${style.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${style.titleCity}`}>
              <p>{`${data.city}, ${data.country}`}</p>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            {descriptionCity}
          </div>
        </div>
      </div>
      <div className={`container ${style.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${style.titleContinent}`}>
              <p>{`${data.spots.places.title} (${lengthList})`}</p>
            </div>
        </div>
        <div className={`row ${style.lineCities}`}>
          <div className={`col-12 ${style.scrollCities}`}>
            {placesBox}
          </div>
        </div>
      </div>
      <div className={`container ${style.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${style.titleContinent}`}>
              <p>{`${data.spots.places.title} (${lengthList})`}</p>
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

export default MainCity;