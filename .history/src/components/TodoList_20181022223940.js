import React, { Component } from 'react';

 
export default class TodoInput extends Component {
    render(){
        return(<ul>
            <li>勉強<button>完了</button></li>
            <li>英語<button>完了</button></li>
            <li>家事<button>完了</button></li>
            <li>料理<button>完了</button></li>
            <li>掃除<button>完了</button></li>
        
          </ul>)
    }
}