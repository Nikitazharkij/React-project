import React from 'react';
import style from './DescriptionPlace.module.sass';

const DescriptionPlace = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className={`col-12 ${style.titleCity}`}>
          <p>{props.placeSlug}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={style.descriptionText}>
            <p>
              {props.data.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionPlace;