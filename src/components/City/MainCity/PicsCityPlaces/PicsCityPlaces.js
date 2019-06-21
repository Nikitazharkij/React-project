import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './PicsCityPlaces.module.sass'

const PicsCityPlaces = (props) => {

  return (
    <div className={s.picCityFrame}>
      <div>
        <img className={s.previewCity} src={props.src} alt={props.name}/>
      </div>
      <div className={s.picCityText}>
        <h2>{props.name}</h2>
        <h2>{props.type}</h2>
      </div>
    </div>
  )
}

export default PicsCityPlaces;
