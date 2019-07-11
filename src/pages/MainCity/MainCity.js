import React, { Fragment } from 'react';
import DescriptionCity from './../../components/DescriptionCity/DescriptionCity';
import PlacesInfo from './../../components/PlacesInfo/PlacesInfo';
import HotelsInfo from './../../components/HotelsInfo/HotelsInfo';
import Error from './../Error/Error';
import Loading from './../Loading/Loading';
import { useFetch } from './../../useFetch.js';

const MainCity = (props) => {
  let citySlug = props.match.params.citySlug;

  const [data, loading, error] = useFetch(`http://localhost:3006/cities?name=${citySlug}&_embed=places&_embed=hotels`);

  let cityContent = data.find(item => item.name === citySlug);

  return (
    <Fragment>
      { error && <Error /> }
      { loading ? <Loading /> : (
      <Fragment>
        <DescriptionCity data={cityContent} />
        <PlacesInfo data={cityContent} />
        <HotelsInfo data={cityContent} />
      </Fragment>
      )}
    </Fragment>
  )
}

export default MainCity;