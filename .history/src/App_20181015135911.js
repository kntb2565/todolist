import React, { Component } from 'react';
ReactDOM.render(
  <div className=todolist></div>
　 


class App extends Component {
  render() {
    return (
      <div>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
      </div>
    );
  }
}
 
export default App;
 
