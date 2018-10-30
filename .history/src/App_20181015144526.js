import React, { Component } from 'react';

 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        
      </div>
    );
  }
}
 
export default App;
 
