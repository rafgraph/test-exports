import React from 'react';
import { render } from 'react-dom';
import touchDetected, { detectTouchNow } from './index.js';

class App extends React.Component {
  render() {
    console.log('App render:');
    console.log(`Value evaluated on import: ${touchDetected}`);
    console.log(`Value calculated now with function call: ${detectTouchNow()}`);
    return(
      <button onClick={() => this.forceUpdate()}>
        click to force update and log values from import
      </button>
    );
  }
}

render(<App />, document.getElementById("root"))
