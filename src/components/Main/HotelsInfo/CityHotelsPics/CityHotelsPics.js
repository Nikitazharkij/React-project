import React, { Fragment } from 'react';
import style from './CityHotelsPics.module.sass';
import { Link } from 'react-router-dom';

const CityHotelsPics = (props) => {
  const path = `/info/city/${props.continentName}/${props.cityName}/hotel/${props.hotelName}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.src} alt={props.hotelName}/>
          </div>
          <div className={style.picCityText}>
            <h3>{props.hotelName}</h3>
            <h4>{props.cost}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default CityHotelsPics;
