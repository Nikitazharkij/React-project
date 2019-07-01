import React from 'react';
import style from './HeaderHome.module.sass'

const HeaderHome = (props) => {
  return (
    <div className={style.headerPage}>
      <div className="container">
        <div className={`row ${style.headerTitle}`}> 
          <div className="col-12">
            Choose region
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHome;
