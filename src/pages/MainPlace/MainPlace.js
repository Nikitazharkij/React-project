import React, { Fragment } from 'react';
import DescriptionPlace from './../../components/Main/DescriptionPlace/DescriptionPlace';
import PostsInfoContainer from './../../components/Main/PostsInfo/PostsInfoContainer';

const MainPlace = (props) => {

  let data = null;
  let continentName = props.match.params.continentName;
  let citySlug = props.match.params.citySlug;
  let typePlace = props.match.params.typePlace;
  let placeSlug = props.match.params.placeSlug;

  for (let i = 0; i < props.data[continentName].length; i++) {
    if (props.data[continentName][i].city === citySlug) {
      let dataPlaces = props.data[continentName][i].spots[typePlace].description;
      findPlaceDescription(dataPlaces);
      break;
    }
  }

  function findPlaceDescription(dataPlaces) {
    for (let i = 0; i < dataPlaces.length; i++) {
      if (dataPlaces[i].name === placeSlug) {
        data = dataPlaces[i];
        break;
      }
    }
  }

  return (
    <Fragment>
      <DescriptionPlace data={data} placeSlug={placeSlug} />
      <PostsInfoContainer data={data} />
    </Fragment>
  )
}

export default MainPlace;