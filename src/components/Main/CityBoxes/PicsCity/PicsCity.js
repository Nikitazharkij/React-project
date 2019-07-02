import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './PicsCity.module.sass'

const PicsCity = (props) => {

  const path = `/info/city/${props.city}`;

  return (
    <div>
      <NavLink to = {path}>
        <div className={style.picCityFrame}>
          <div>
            <img className={style.previewCity} src={props.src} alt={props.country}/>
          </div>
          <div className={style.picCityText}>
            <p>{props.city}</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default PicsCity;
