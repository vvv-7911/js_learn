import React from 'react';
import './App.css';
import Toast from './Toast';

class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => {
          Toast.addNotice('info', '内容一', 2000)
        }}>open</button>
      </div>
    )
  }
}

export default App;
