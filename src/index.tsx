import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Contact, About, Phonebook, SignIn } from './components'
import './style.css'
import { FirebaseAppProvider, AuthCheck } from 'reactfire'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth'
import { Provider } from 'react-redux'
import { store } from './redux/store'

let my_title = "Corey's Phonebook"

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
  <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={my_title} />
        </Route>

        <Route exact path='/phonebook'>
          <Phonebook />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/signin'>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
  </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

