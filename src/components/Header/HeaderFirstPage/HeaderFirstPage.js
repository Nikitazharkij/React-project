import React from 'react';
import s from './HeaderFirstPage.module.sass'

const HeaderFirstPage = (props) => {

  return (
      <div className={s.headerPage}>
        <div className="container">
          <div className={`row ${s.headerTitle}`}>
            <div className="col-12">
              Choose region
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeaderFirstPage;
