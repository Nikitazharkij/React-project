import React from 'react';
import s from './MainCity.module.sass'
import PicsCityPlaces from './PicsCityPlaces/PicsCityPlaces'
import DescriptionCity from './DescriptionCity/DescriptionCity'

const MainCity = (props) => {
  const data = props.data.europe[0];
  const spotType = Object.keys(data.spots);

  const descriptionCity = <DescriptionCity
    descriptionCity = {data.description} />

  const spotsBox = spotType.map(item => {
    let lengthList = data.spots[item].description.length;

    const contentSpot = data.spots[item].description.map(p =>
    <PicsCityPlaces
      key = {p.id}
      name = {p.name}
      src = {p.src}
      type = {p.type} />
  )

    return (
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>{`${data.spots[item].title.toUpperCase()} (${lengthList})`}</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {contentSpot}
          </div>
        </div>
      </div>
    )
  })

  return (
    <main>
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleCity}`}>
              <p>{`${data.city}, ${data.country}`}</p>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            {descriptionCity}
          </div>
        </div>
      </div>
        {spotsBox}
    </main>
  )
}

export default MainCity;