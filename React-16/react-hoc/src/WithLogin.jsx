import React, { Component } from 'react'
export default function(Com) {
  class WithLogin extends Component {
    state = {
      isLogin: false
    }
    render () {
      const { isLogin } = this.state
      if (isLogin) {
        return (
          <Com/>
        )
      }
      return (
        <button onClick={() => {
          this.setState({
            isLogin: true
          })
        }}>login</button>
      )
    }
  }
  return WithLogin;
}

// function add (a, b) {
//   return a + b;
// }
// add(5, 10);
// // 函数式一等公民
// function addAsync (a, b, c) {

// }