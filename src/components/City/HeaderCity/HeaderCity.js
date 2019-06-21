import React from 'react';
import s from './HeaderCity.module.sass'

const HeaderCity = (props) => {

  return (
      <div className={s.headerPage}>
        <div className="container">
          <div className={`row ${s.headerTitle}`}>
            <div className="col-12">
              Hello World!!!
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeaderCity;
