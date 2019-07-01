import React from 'react';
import style from './HeaderCity.module.sass'
import arrow from './../arrow.png'
import {NavLink} from 'react-router-dom';

const HeaderCity = (props) => {
  return (
    <div className={style.headerPage}>
      <div className="picHeader">
        <NavLink to = "/">
          <img className={style.arrow} src={arrow} alt="Arrow"/>
        </NavLink>
      </div>
    </div>
  )
}

export default HeaderCity;
