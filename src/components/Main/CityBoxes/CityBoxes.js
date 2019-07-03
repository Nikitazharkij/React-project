import React from 'react';
import style from './CityBoxes.module.sass';
import PicsCity from './PicsCity/PicsCity';

const CityBoxes = (props) => {

  let lengthList = props.data[props.continentName].length;
  const contentCities = props.data[props.continentName].map(contentCity =>
  <PicsCity key = {contentCity.id}
            country = {contentCity.country}
            src = {contentCity.src}
            city = {contentCity.city} />
  )

  return (
    <div className={`container ${style.profileCities}`} key = {props.continentName}>
      <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.continentName} (${lengthList})`}</p>
          </div>
      </div>
      <div className={`row ${style.lineCities}`}>
        <div className={`col-12 ${style.scrollCities}`}>
          {contentCities}
        </div>
      </div>
    </div>
  )
}

export default CityBoxes;
