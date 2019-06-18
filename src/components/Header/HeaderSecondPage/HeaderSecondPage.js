import React from 'react';
import s from './HeaderSecondPage.module.sass'

const HeaderSecondPage = (props) => {

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

export default HeaderSecondPage;
