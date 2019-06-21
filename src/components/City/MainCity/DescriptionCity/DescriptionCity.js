import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DescriptionCity.module.sass'

const DescriptionCity = (props) => {

  return (
    <div className={s.picCityFrame}>
      <span>{props.descriptionCity}</span>
    </div>
  )
}

export default DescriptionCity;
