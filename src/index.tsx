import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components'
import reportWebVitals from './reportWebVitals';
import './style.css'

let my_title = "Corey's Phonebook"

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={my_title} />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
