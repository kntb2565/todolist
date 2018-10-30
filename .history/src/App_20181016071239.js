import React, { Component } from 'react';

 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center" }}>
       <div>

タイトル：<input type="text" value={this.state.textTitle} 
  onChange={e => this.setState({textTitle: e.target.value})}/>

内容：<input type="text" value={this.state.textContent} 
  onChange={e => this.setState({textContent: e.target.value})}/>

</div>
<div onClick={e => this.addToDo()}>追加</div>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
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



 
