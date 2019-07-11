import React, { Fragment } from 'react';
import style from './CityHotelsPics.module.sass';
import { Link } from 'react-router-dom';

const CityHotelsPics = (props) => {
  const path = `/info/city/${props.continentId}/${props.cityName}/hotels/${props.hotelContent.cityId}/${props.hotelContent.id}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.hotelContent.src} alt={props.hotelContent.name}/>
          </div>
          <div className={style.picCityText}>
            <h3>{props.hotelContent.name}</h3>
            <h4>{props.hotelContent.cost}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default CityHotelsPics;
