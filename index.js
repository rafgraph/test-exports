import React from 'react';
import { render } from 'react-dom';
import dateAtImport, { dateNow } from './exportTest.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {importTest: []};
    this.addDates = this.addDates.bind(this);
  }

  addDates() {
    this.setState({
      importTest: this.state.importTest.concat(
        `Date from function called on export: ${dateAtImport}`,
        `Date from imported function called now: ${dateNow()}`,
        ''
      )
    })
  }

  render() {
    return(
      <div>
        <p>
          This is a simple test to check when exported functions are evaluated
          <a style={{display: "block"}} href="https://github.com/rafrex/test-export-value">
            https://github.com/rafrex/test-export-value
          </a>
        </p>
        <button onClick={this.addDates}>
          click to check values
        </button>
        <ul>
          {this.state.importTest.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"))
