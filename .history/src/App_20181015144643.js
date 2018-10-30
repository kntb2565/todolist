import React, { Component } from 'react';

 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
        <ul>
          <li> <input type="button" value="☓" /> </li>
          <li> <input type="button" value="☓" /> </li>
          <li> <input type="button" value="☓" /> </li>
          <li> <input type="button" value="☓" /> </li>
        </ul>

      </div>
    );
  }
}
 
export default App;
 
