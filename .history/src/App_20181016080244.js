import React, { Component } from 'react';

 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
        <ul>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
        </ul>

      </div>
    );
  }
}
 
class Todolist extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
        <ul>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
          <li> <input type="checkbox" /> <input type="text" /></li>
        </ul>

      </div>
    );
  }
}
export default App;
 
