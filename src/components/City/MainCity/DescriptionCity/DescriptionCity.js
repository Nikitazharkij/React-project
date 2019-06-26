import React, { Component } from 'react';
import s from './DescriptionCity.module.sass'

class DescriptionCity extends Component {

  render() {
    return (
      <div className={s.descriptionText}>
        <p>{this.props.descriptionCity}</p>
      </div>
    )
  }
}

export default DescriptionCity;
