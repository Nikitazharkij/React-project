import React from 'react';
import { Link } from 'react-router-dom';
import style from './PicsCity.module.sass'

const PicsCity = (props) => {

  const path = `/info/city/${props.city}`;

  return (
    <div>
      <Link to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.src} alt={props.country}/>
          </div>
          <div className={style.picCityText}>
            <p>{props.city}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PicsCity;
