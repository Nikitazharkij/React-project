import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './PicsCity.module.sass'

const PicsCity = (props) => {
  let capitalLetters = props.city.toUpperCase();
  let city = props.city.replace(/\s/g, '');
  let path = `/city/${city}`;
  return (
    <div className={s.picCityFrame}>
      <div>
        <img className={s.previewCity} src={props.src} alt={props.country}/>
      </div>
      <div className={s.picCityText}>
        <NavLink to = {path}>{capitalLetters}</NavLink>
      </div>
    </div>
  )
}

export default PicsCity;
