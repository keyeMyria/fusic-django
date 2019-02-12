import React, { Component } from 'react';
import './App.css';


import { WebSocketBridge } from 'django-channels'

const webSocketBridge = new WebSocketBridge();
webSocketBridge.connect('/api/');
webSocketBridge.listen(function(action, stream) {
  console.log(action, stream);
});


class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
