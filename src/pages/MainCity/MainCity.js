import React, { Fragment } from 'react';
import style from './MainCity.module.sass';
import DescriptionCity from './../../components/Main/DescriptionCity/DescriptionCity';
import SightsInfo from './../../components/Main/SightsInfo/SightsInfo';
import HotelsInfo from './../../components/Main/HotelsInfo/HotelsInfo';


const MainCity = (props) => {

  const data = props.data.europe[0];
  const contentPlacesCity = data.spots.places.description;
  const contentHotelsCity = data.spots.hotels.description;
  const lengthList = contentPlacesCity.length;

  return (
    <Fragment>
      <DescriptionCity data={data}/>
      <SightsInfo data={data} contentPlacesCity={contentPlacesCity} lengthList={lengthList}/>
      <HotelsInfo data={data} contentHotelsCity={contentHotelsCity} lengthList={lengthList}/>
    </Fragment>
  )
}

export default MainCity;