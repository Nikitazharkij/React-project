import React, { Fragment } from 'react';
import style from './MainPlace.module.sass';
import DescriptionPlace from './../../components/Main/DescriptionPlace/DescriptionPlace';

const MainPlace = (props) => {

  let data = null;
  let continentName = props.match.params.continentName;
  let cityName = props.match.params.cityName;
  let typePlace = props.match.params.typePlace;
  let placeName = props.match.params.placeName;

  for (let i = 0; i < props.data[continentName].length; i++) {
    if (props.data[continentName][i].city === cityName) {
      let dataPlaces = props.data[continentName][i].spots[typePlace].description;
      findPlaceDescription(dataPlaces);
      break;
    }
  }

  function findPlaceDescription(dataPlaces) {
    for (let i = 0; i < dataPlaces.length; i++) {
      if (dataPlaces[i].name === placeName) {
        data = dataPlaces[i].info;
        break;
      }
    }
  }

  return (
    <Fragment>
      <DescriptionPlace data={data} placeName={placeName} />
    </Fragment>
  )
}

export default MainPlace;