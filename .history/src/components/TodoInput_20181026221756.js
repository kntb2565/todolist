import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class TodoInput extends Component {
    render(){
        return(<div className="todo">
        <h1>TODOリスト</h1>
        <input type="text" placeholder="todoを入力してください"/>
       
      <div className="todo1">
        <textarea rows="3" placeholder="概要を入力してください"></textarea>
      </div>
        
      <Button>追加</Button> 
        
      </div> )
    }
}



