import React, { Fragment } from 'react';
import CityBoxes from './../../components/CityBoxes/CityBoxes'

const MainHome = (props) => {

  const cityBoxes = props.data.map(continentContent =>
    <CityBoxes
      key={continentContent.id}
      data={continentContent} />
  )

  return (
    <Fragment>
      {cityBoxes}
    </Fragment>
  )
}

export default MainHome;
