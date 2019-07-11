import React, { Component } from 'react';
import style from './Description.module.sass'

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetailed: false};
    this.showText = this.showText.bind(this);
  }

  showText() {
    this.setState({showDetailed: true});
  }

  render() {
    const showDetailed = this.state.showDetailed;
    let text;

    if (showDetailed) {
      text = <p>{this.props.descriptionCity}</p>
    } else {
      text = <p>{this.props.descriptionCityShort}</p>
    }

    return (
      <div className={style.descriptionText}>
        {text}
        <h4 onClick={ this.showText }>
        {this.state.showDetailed ? ' ' : 'Read more'}
        </h4>
      </div>
    )
  }
}

export default Description;
