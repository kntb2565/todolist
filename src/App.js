import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import * as Actions from './actions';

class App extends Component {

  constructor(props) {
    super(props);
  }

  submit(values) {
    console.log(values);
    this.props.actions.addTodo(values);
  }

  render() {
    const { todos } = this.props.app;
    return (
       <div style={{ textAlign: "center" }}>
        <TodoInput onSubmit={this.submit.bind(this)} />
        <TodoList todos={todos} />
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