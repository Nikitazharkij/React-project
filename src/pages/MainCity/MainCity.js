import React, { Fragment } from 'react';
import DescriptionCity from './../../components/Main/DescriptionCity/DescriptionCity';
import SightsInfo from './../../components/Main/SightsInfo/SightsInfo';
import HotelsInfo from './../../components/Main/HotelsInfo/HotelsInfo';

const MainCity = (props) => {

  let continentName = props.match.params.continentName;
  let citySlug = props.match.params.citySlug;
  let cityItem = props.data[continentName].find(item => item.city === citySlug);

  return (
    <Fragment>
      <DescriptionCity data={cityItem}/>
      <SightsInfo data={cityItem}
                  continentName={continentName}/>
      <HotelsInfo data={cityItem}
                  continentName={continentName} />
    </Fragment>
  )
}

export default MainCity;