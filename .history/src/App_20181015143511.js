import React, { Component } from 'react';
import { blue } from 'ansi-colors';
 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
      </hr>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
      </div>
    );
  }
}
 
export default App;
 
