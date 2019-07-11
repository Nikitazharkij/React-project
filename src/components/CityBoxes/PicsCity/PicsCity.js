import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './PicsCity.module.sass'

const PicsCity = (props) => {

  const path = `/info/city/${props.continentNumber}/${props.cityName}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.src} alt={props.cityName}/>
          </div>
          <div className={style.picCityText}>
            <p>{props.cityName}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default PicsCity;
