import React, { Component } from 'react';
import s from './FooterCity.module.sass'
import { NavLink } from 'react-router-dom';

class FooterCity extends Component {

  render() {
    return (
    <footer>
      <div className="container">
        <div className="row"> 
          <div className="col-3">
            <NavLink to = "/city/print">
              <div className={s.imegBox} id={s.img1}>
              </div>
            </NavLink>
          </div>
          <div className="col-3">
            <NavLink to = "/city/tv">
              <div className={s.imegBox} id={s.img2}>
              </div>
            </NavLink>
          </div>
          <div className="col-3">
          <NavLink to = "/city/present">
            <div className={s.imegBox} id={s.img3}>
            </div>
          </NavLink>
          </div>
          <div className="col-3">
            <NavLink to = "/city/clock">
              <div className={s.imegBox} id={s.img4}>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}

export default FooterCity;
