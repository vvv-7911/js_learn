import React, { Component } from 'react';
import WithLogin from './WithLogin';

// @WithLogin
class OrderList extends Component {
  render() {
    return (
      <ul>
        <li>IPad</li>
        <li>MAC</li>
      </ul>
    )
  }
}
// WithLogin 返回的是组件
export default WithLogin(OrderList);
