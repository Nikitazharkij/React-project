import React from 'react';
import s from './DescriptionCity.module.sass'

const DescriptionCity = (props) => {

  return (
    <div className={s.descriptionText}>
      <p>{props.descriptionCity}</p>
    </div>
  )
}

export default DescriptionCity;
