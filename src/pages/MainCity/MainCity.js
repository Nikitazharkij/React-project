import React, { Fragment } from 'react';
import DescriptionCity from './../../components/Main/DescriptionCity/DescriptionCity';
import SightsInfo from './../../components/Main/SightsInfo/SightsInfo';
import HotelsInfo from './../../components/Main/HotelsInfo/HotelsInfo';


const MainCity = (props) => {

  let data = null;
  let continentName = props.match.params.continentName;
  let cityName = props.match.params.cityName;

  for (let key in props.data) {
    if (key === continentName) {
      findCity(key);
      break;
    }
  }

  function findCity(key) {
    for (let i = 0; i < props.data[key].length; i++) {
      if (props.data[key][i].city === cityName) {
        data = props.data[key][i]
        break;
      }
    }
  }

  const contentPlacesCity = data.spots.places.description;
  const contentHotelsCity = data.spots.hotels.description;
  const lengthPlacesList = contentPlacesCity.length;
  const lengthHotelsList = contentHotelsCity.length;

  return (
    <Fragment>
      <DescriptionCity data={data}/>
      <SightsInfo data={data} contentPlacesCity={contentPlacesCity} lengthList={lengthPlacesList}/>
      <HotelsInfo data={data} contentHotelsCity={contentHotelsCity} lengthList={lengthHotelsList}/>
    </Fragment>
  )
}

export default MainCity;