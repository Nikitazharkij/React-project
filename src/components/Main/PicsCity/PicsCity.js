import React from 'react';
import s from './PicsCity.module.sass'

const PicsCity = (props) => {
  let capitalLetters = props.city.toUpperCase();

  return (
    <div className={s.picCityFrame}>
      <div>
        <img className={s.previewCity} src={props.src} alt={props.country}/>
      </div>
      <div className={s.picCityText}>
        <span>{capitalLetters}</span>
      </div>
    </div>
  )
}

export default PicsCity;
