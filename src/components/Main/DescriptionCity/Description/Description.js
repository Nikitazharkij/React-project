import React, { Component } from 'react';
import style from './Description.module.sass'

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
    this.showText = this.showText.bind(this);
  }

  showText() {
    this.setState({isShow: true});
  }

  render() {
    const isShow = this.state.isShow;
    let text;

    if (isShow) {
      text = <p>{this.props.descriptionCity}</p>
    } else {
      text = <p>{this.props.descriptionCityShort}</p>
    }

    return (
      <div className={style.descriptionText}>
        {text}
        <h4 onClick={ this.showText }>
        {this.state.isShow ? ' ' : 'Read more'}
        </h4>
      </div>
    )
  }
}

export default Description;
