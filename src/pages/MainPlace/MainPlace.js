import React, { Fragment } from 'react';
import DescriptionPlace from './../../components/Main/DescriptionPlace/DescriptionPlace';
import PostsInfoContainer from './../../components/Main/PostsInfo/PostsInfoContainer';

const MainPlace = (props) => {

  let continentName = props.match.params.continentName;
  let citySlug = props.match.params.citySlug;
  let typePlace = props.match.params.typePlace;
  let placeSlug = props.match.params.placeSlug;

  let cityItem = props.data[continentName].find(item => item.city === citySlug);
  let placeItem = cityItem[typePlace].description.find(item => item.name === placeSlug);

  return (
    <Fragment>
      <DescriptionPlace data={placeItem} placeSlug={placeSlug} />
      <PostsInfoContainer data={placeItem} />
    </Fragment>
  )
}

export default MainPlace;