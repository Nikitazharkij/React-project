import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PicsCity.module.sass'

class PicsCity extends Component {

  render() {
    const capitalLetters = this.props.city.toUpperCase();
    const city = this.props.city.replace(/\s/g, '');
    const path = `/city/1/${city}`;

    return (
      <div>
        <NavLink to = {path}>
          <div className={s.picCityFrame}>
            <div>
              <img className={s.previewCity} src={this.props.src} alt={this.props.country}/>
            </div>
            <div className={s.picCityText}>
              <p>{capitalLetters}</p>
            </div>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default PicsCity;
