import React from 'react';
import style from './Error.module.sass'

const Error = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-12 ${style.textInfo}`}>
          <h1>Something went wrong...</h1>
        </div>
      </div>
    </div>
  )
}

export default Error;