import React from 'react';
import s from './MainHome.module.sass'
import PicsCity from './PicsCity/PicsCity'

const MainHome = (props) => {

  const continentNames = Object.keys(props.data);

  const cityBoxes = continentNames.map(continentName => {
    let lengthList = props.data[continentName].length;

    const contentCities = props.data[continentName].map(p =>
    <PicsCity key = {p.id} 
              country = {p.country} 
              src = {p.src}
              city = {p.city} />
    )
    return (
      <div className={`container ${s.profileCities}`}>
        <div className="row">
            <div className={`col-12 ${s.titleContinent}`}>
              <p>{`${continentName.toUpperCase()} (${lengthList})`}</p>
            </div>
        </div>
        <div className={`row ${s.lineCities}`}>
          <div className={`col-12 ${s.scrollCities}`}>
            {contentCities}
          </div>
        </div>
      </div>
    )
  })

  return (
    <main>
      {cityBoxes}
    </main>
  )
}

export default MainHome;
