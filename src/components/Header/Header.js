import React from 'react';
import s from './Header.module.sass'

const Header = (props) => {
  console.log(s)
  return (
    <header>
      <div className={s.headerFirstPage}>
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

export default Header;
