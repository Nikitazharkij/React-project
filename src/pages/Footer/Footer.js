import React from 'react';
import style from './Footer.module.sass'
import { Link } from 'react-router-dom';

const FooterCity = (props) => {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-3">
          <Link to = "/info/print">
            <div className={style.imegBox} id={style.img1}>
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to = "/info/tv">
            <div className={style.imegBox} id={style.img2}>
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to = "/info/present">
            <div className={style.imegBox} id={style.img3}>
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to = "/info/clock">
            <div className={style.imegBox} id={style.img4}>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterCity;
