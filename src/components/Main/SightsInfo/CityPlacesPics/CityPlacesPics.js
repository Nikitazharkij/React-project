import React, { Fragment } from 'react';
import style from './CityPlacesPics.module.sass';
import { Link } from 'react-router-dom';

const CityPlacesPics = (props) => {
  const path = `/info/city/${props.continentName}/${props.cityName}/place/${props.placeName.name}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.placeName.src} alt={props.placeName.name}/>
          </div>
          <div className={style.picCityText}>
            <h3>{props.placeName.name}</h3>
            <h4>{props.placeName.type}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default CityPlacesPics;
