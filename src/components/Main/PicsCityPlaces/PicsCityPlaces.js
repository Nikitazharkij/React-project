import React from 'react';
import style from './PicsCityPlaces.module.sass'

const PicsCityPlaces = (props) => {
  return (
    <div className={style.picCityFrame}>
      <div>
        <img className={style.previewCity} src={props.src} alt={props.name}/>
      </div>
      <div className={style.picCityText}>
        <h3>{props.name}</h3>
        <h4>{props.info}</h4>
      </div>
    </div>
  )
}

export default PicsCityPlaces;
