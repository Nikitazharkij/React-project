import React from 'react';
import style from './DescriptionCity.module.sass';
import Description from './Description/Description';

const DescriptionCity = (props) => {

  const descriptionCity = <Description
    descriptionCity = {props.data.description}
    descriptionCityShort = {props.data.descriptionShort}/>

  return (
    <div className={`container ${style.profileCities}`}>
      <div className="row">
        <div className={`col-12 ${style.titleCity}`}>
          <p>{`${props.data.name}, ${props.data.country}`}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {descriptionCity}
        </div>
      </div>
    </div>
  )
}

export default DescriptionCity;