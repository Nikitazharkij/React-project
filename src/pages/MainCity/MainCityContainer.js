import React from 'react';
import MainCity from './MainCity';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    data: state.usersPage.users 
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCity);


