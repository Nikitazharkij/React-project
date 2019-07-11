import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './PicsCity.module.sass'

const PicsCity = (props) => {

  const path = `/info/city/${props.continentName}/${props.contentCity.city}`;

  return (
    <Fragment>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.contentCity.src} alt={props.contentCity.country}/>
          </div>
          <div className={style.picCityText}>
            <p>{props.contentCity.city}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default PicsCity;
