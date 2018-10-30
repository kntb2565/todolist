import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import reducer from './reducers';
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


serviceWorker.unregister();



