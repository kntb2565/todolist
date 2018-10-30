import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
 
class App extends Component {

  constructor(props) {
    super(props);
  }

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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




