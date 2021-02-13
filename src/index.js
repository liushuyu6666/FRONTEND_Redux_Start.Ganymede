import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from "./store";

import './api/server'

// const unsubscribe = store.subscribe(() =>
//     console.log("state after dispatch: ", store.getState())
// );
console.log('dispatching action');
store.dispatch({type: "todos/todoAdded", payload: "learn about actions"})
console.log("dispatch complete")

// unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
