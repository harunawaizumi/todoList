import React from 'react'
import { Switch } from 'react-router'
import Route from 'react-router-dom/Route'
import logo from './assets/logo.svg'
import Nav from './Nav'
import Home from './Home'
import CodeExample1 from './CodeExample1'
import CodeExample2 from './CodeExample2'
import CodeExample3 from './CodeExample3'
import CodeExample4 from './CodeExample4'
import CodeExample5 from './CodeExample5'
import CodeExample7 from './CodeExample7/CodeExample7'
import './App.css'

// import reducer
import rootReducer from './reducers/index'

// import thunk
//import thunk from "redux-thunk"

// import data
import { createStore, applyMiddleware, compose } from 'redux';
import CardField from './containers/CardField'
import { Provider } from 'react-redux'
import items from './data/items'
let  thunk = require('redux-thunk').default

// create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


console.log(store)

export default () => (
  <Provider store={store}>
    <div className='App'>

      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>SuperSelectField</h2>
        <h4>a Material-UI based dropdown component</h4>
      </div>

      <Nav />

      <section className='App-content'>
        <Switch>
          <Route path='/example1' component={CodeExample1} />
          <Route path='/example2' component={CodeExample2} />
          <Route path='/example3' component={CodeExample3} />
          <Route path='/example4' component={CodeExample4} />
          <Route path='/example5' component={CodeExample5} />
          <Route path='/example6' component={CardField} />
          <Route path='/example7' component={CodeExample7} />
          <Route component={Home} />
        </Switch>
      </section>

    </div>
  </Provider>
)

// ここにpropsをながす記載がないから、たぶんここが問題
