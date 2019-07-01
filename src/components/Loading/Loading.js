import React from 'react';
import style from './Loading.module.sass'

const Error = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-12 ${style.textInfo}`}>
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  )
}

export default Error;