import React, { Component } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

 
class App extends Component {

  submit(values) {
    console.log(values);
  }

  render() {
    return (
       <div style={{textAlign: "center" }}>
        <TodoInput onSubmit={this.submit.bind(this)} />
        <TodoList/>
      </div>
    );
  }
}
 

export default App;