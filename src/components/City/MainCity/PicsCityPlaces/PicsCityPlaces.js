import React, { Component } from 'react';
import s from './PicsCityPlaces.module.sass'

class PicsCityPlaces extends Component {

  render() {
    return (
      <div className={s.picCityFrame}>
        <div>
          <img className={s.previewCity} src={this.props.src} alt={this.props.name}/>
        </div>
        <div className={s.picCityText}>
          <h3>{this.props.name}</h3>
          <h4>{this.props.info}</h4>
        </div>
      </div>
    )
  }
}

export default PicsCityPlaces;
