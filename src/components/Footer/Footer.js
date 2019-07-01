import React from 'react';
import style from './Footer.module.sass'
import { NavLink } from 'react-router-dom';

const FooterCity = (props) => {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-3">
          <NavLink to = "/info/print">
            <div className={style.imegBox} id={style.img1}>
            </div>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to = "/info/tv">
            <div className={style.imegBox} id={style.img2}>
            </div>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to = "/info/present">
            <div className={style.imegBox} id={style.img3}>
            </div>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to = "/info/clock">
            <div className={style.imegBox} id={style.img4}>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default FooterCity;
