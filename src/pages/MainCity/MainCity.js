import React, { Fragment } from 'react';
import DescriptionCity from './../../components/Main/DescriptionCity/DescriptionCity';
import SightsInfo from './../../components/Main/SightsInfo/SightsInfo';
import HotelsInfo from './../../components/Main/HotelsInfo/HotelsInfo';


const MainCity = (props) => {

  let data = null;
  let continentName = props.match.params.continentName;
  let citySlug = props.match.params.citySlug;

  for (let i = 0; i < props.data[continentName].length; i++) {
    if (props.data[continentName][i].city === citySlug) {
      data = props.data[continentName][i]
      break;
    }
  }


  const contentPlacesCity = data.spots.place.description;
  const contentHotelsCity = data.spots.hotel.description;
  const lengthPlacesList = contentPlacesCity.length;
  const lengthHotelsList = contentHotelsCity.length;

  return (
    <Fragment>
      <DescriptionCity data={data}/>
      <SightsInfo data={data}
        continentName={continentName}
        contentPlacesCity={contentPlacesCity}
        lengthList={lengthPlacesList}/>
      <HotelsInfo data={data}
        continentName={continentName}
        contentHotelsCity={contentHotelsCity}
        lengthList={lengthHotelsList}/>
    </Fragment>
  )
}

export default MainCity;