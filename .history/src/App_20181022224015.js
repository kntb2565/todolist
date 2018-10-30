import React, { Component } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
        <TodoInput/>
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
 
