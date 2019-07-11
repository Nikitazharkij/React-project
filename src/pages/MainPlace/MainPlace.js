import React, { Fragment } from 'react';
import DescriptionPlace from './../../components/DescriptionPlace/DescriptionPlace';
import MessagesContainer from './../../components/Messages/MessagesContainer';
import Error from './../Error/Error';
import Loading from './../Loading/Loading';
import { useFetch } from './../../useFetch.js';

const MainPlace = (props) => {

  let placeId = props.match.params.placeId;
  let placeType = props.match.params.placeType;

  const [data, loading, error] = useFetch(`http://localhost:3006/${placeType}?id=${placeId}&_embed=messages&`);

  let cityContent = data.find(item => item.id === +placeId)

  return (
    <Fragment>
      { error && <Error /> }
      { loading ? <Loading /> : (
      <Fragment>
        <DescriptionPlace placeName={cityContent.name}
                          placeInfo={cityContent.info} />
        <MessagesContainer data={cityContent.messages}/>
      </Fragment>
      )}
    </Fragment>
  )
}

export default MainPlace;