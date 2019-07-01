import React, { Fragment } from 'react';
import CityBoxes from './../../components/Main/CityBoxes/CityBoxes'

const MainHome = (props) => {

  const continentNames = Object.keys(props.data);

  const cityBoxes = continentNames.map(continentName =>
    <CityBoxes
      key={continentName}
      data={props.data}
      continentName={continentName}/>
  )

  return (
    <Fragment>
      {cityBoxes}
    </Fragment>
  )
}

export default MainHome;
