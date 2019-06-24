import React from 'react';
import s from './HeaderCity.module.sass'
import arrow from './img/arrow.png'
import {NavLink} from 'react-router-dom';

const HeaderCity = (props) => {

  return (
    <header>
      <div className={s.headerPage}>
        <div className="picHeader">
          <NavLink to = "/">
            <img className={s.arrow} src={arrow} alt="Arrow"/>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default HeaderCity;
