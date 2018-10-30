import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

 
export default class TodoInput extends Component {
    render(){
        return(<ul>
            <li>勉強<Button>完了</Button></li>
            <li>英語<Button>完了</Button></li>
            <li>家事<Button>完了</Button></li>
            <li>料理<Button>完了</Button></li>
            <li>掃除<Button>完了</Button></li>
        
          </ul>)
    }
}