import React from 'react';
import s from './PicsCityPlaces.module.sass'

const PicsCityPlaces = (props) => {

  return (
    <div className={s.picCityFrame}>
      <div>
        <img className={s.previewCity} src={props.src} alt={props.name}/>
      </div>
      <div className={s.picCityText}>
        <h3>{props.name}</h3>
        <h4>{props.type}</h4>
      </div>
    </div>
  )
}

export default PicsCityPlaces;
