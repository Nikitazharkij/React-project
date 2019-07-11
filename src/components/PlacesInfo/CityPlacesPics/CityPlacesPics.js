import React, { Fragment } from 'react';
import style from './CityPlacesPics.module.sass';
import { Link } from 'react-router-dom';

const CityPlacesPics = (props) => {
  const path = `/info/city/${props.continentId}/${props.cityName}/places/${props.placeContent.cityId}/${props.placeContent.id}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.placeContent.src} alt={props.placeContent.name}/>
          </div>
          <div className={style.picCityText}>
            <h3>{props.placeContent.name}</h3>
            <h4>{props.placeContent.type}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default CityPlacesPics;
