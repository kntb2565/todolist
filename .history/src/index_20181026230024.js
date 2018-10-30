import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import reducer from './reducer';
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers({
  app: reducer,
  form: formReducer
});

const store = createStore(rootReducer)




ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



