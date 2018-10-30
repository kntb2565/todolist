import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
 
export default class TodoInput extends Component {
    render(){
        const {todos} = this.props
        return(<ul>
            {todos.map(todo => {
                return (<li>{todo.name}</li>);
            })}
          </ul>)
    }
}