import React, { Component } from 'react';
import WithLogin from './WithLogin'

class UserInfo extends Component {
  state = {
    isLogin: false
  }
  render() {
    return (
      <p>username</p>
    )
  }
}
  export default WithLogin(UserInfo);