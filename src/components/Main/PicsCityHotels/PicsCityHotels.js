import React from 'react';
import style from './PicsCityHotels.module.sass'

const PicsCityHotels = (props) => {
  return (
    <div className={style.picCityFrame}>
      <div>
        <img className={style.previewCity} src={props.src} alt={props.name}/>
      </div>
      <div className={style.picCityText}>
        <h3>{props.name}</h3>
        <h4>{props.cost}</h4>
      </div>
    </div>
  )
}

export default PicsCityHotels;
