import React from 'react';
import style from './CityBoxes.module.sass';
import PicsCity from './PicsCity/PicsCity';

const CityBoxes = (props) => {

  let citiesCount = props.data.cities.length;
  const contentCities = props.data.cities.map(cityContent =>
  <PicsCity key = {cityContent.id}
            cityName = {cityContent.name}
            src={cityContent.src}
            continentNumber= {props.data.id} />
  )

  return (
    <div className={`container ${style.profileCities}`} key = {props.continentName}>
      <div className="row">
          <div className={`col-12 ${style.titleContinent}`}>
            <p>{`${props.data.name} (${citiesCount})`}</p>
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
