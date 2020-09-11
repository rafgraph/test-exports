import React from 'react';
import { render } from 'react-dom';
import Test from './Test';
import dateAtImport, { dateNow } from './exportTest.js';
import importObject from './exportObjectTest';

let a  = importObject['state']['a'];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { importDateTest: [], importObjectState: [importObject['state']['a']] };
    this.addDates = this.addDates.bind(this);
    this.updateImportObject = this.updateImportObject.bind(this);
  }

  addDates() {
    this.setState({
      importDateTest: this.state.importDateTest.concat(
        `Date from function called on export: ${dateAtImport}`,
        `Date from imported function called now: ${dateNow()}`,
        ''
      )
    });
  }

  updateImportObject() {
    this.setState({
      importObjectState: this.state.importObjectState.concat(importObject['state']['a'])
    });
  }

  render() {
    return(
      <div>
        <a
          style={{display: 'block'}}
          href="https://github.com/rafgraph/test-exports"
          >
          https://github.com/rafgraph/test-exports
        </a>
        <h4>
          Check when exported functions are evaluated
        </h4>
        <button onClick={this.addDates}>
          click to check date values
        </button>
        <ul>
          {this.state.importDateTest.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <h4>Check the state of exported object</h4>
        <button onClick={this.updateImportObject}>
          click to get current state of import object
        </button>
        <ul>
          {this.state.importObjectState.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>

        <div>Import One</div>
        <Test />
        <div>Import Two</div>
        <Test />
        <div>Import Three</div>
        <Test />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
