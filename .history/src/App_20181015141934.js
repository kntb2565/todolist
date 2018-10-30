import React, { Component } from 'react';
 
class App extends Component {
  render() {
    return (
       <div style={{textAlign: "center"}}>
        <h1>TODOリスト</h1>
        <input type="text" />
        <input type="button" value="追加" />
      </div>
    );
  }
}
 
export default App;
 
<!DOCTYPE html>
<html>
  <head>
    <title>tutorial</title>
    <meta charset="UTF-8">
    <!--App css-->
    <link rel="stylesheet" href="src/App.css">
  </head>
  <body>
    <div id="content"></div>
  </body>
</html>