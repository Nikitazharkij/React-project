import React from 'react';
import s from './HeaderHome.module.sass'

const HeaderHome = (props) => {

  return (
    <header>
      <div className={s.headerPage}>
        <div className="container">
          <div className={`row ${s.headerTitle}`}> 
            <div className="col-12">
              Choose region
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHome;
