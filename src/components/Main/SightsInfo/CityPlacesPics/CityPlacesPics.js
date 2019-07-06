import React, { Fragment } from 'react';
import style from './CityPlacesPics.module.sass';
import { Link } from 'react-router-dom';

const CityPlacesPics = (props) => {
  const path = `/info/city/${props.continentName}/${props.cityName}/place/${props.placeName}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.src} alt={props.placeName}/>
          </div>
          <div className={style.picCityText}>
            <h3>{props.placeName}</h3>
            <h4>{props.type}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default CityPlacesPics;
