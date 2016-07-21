import React from 'react';
import importObject from './exportObjectTest';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { importObjectState: [importObject['state']['a']] };
    this.updateImportObject = this.updateImportObject.bind(this);
  }

  updateImportObject() {
    importObject.update('a', Math.floor(Math.random() * 1000));
    this.setState({
      importObjectState: this.state.importObjectState.concat(importObject['state']['a'])
    });

    console.log(this.state);
    this.state.importObjectState = 6000;
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <button onClick={this.updateImportObject}>
          update import object state
        </button>
        <ul>
          {this.state.importObjectState.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Test;
