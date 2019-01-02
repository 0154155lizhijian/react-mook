import React, { Component } from 'react';
import { Route, Link,Redirect ,Switch} from 'react-router-dom'
import Test from './test'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Reducers from './reducers' 
import {connect} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:()=>{}
const store = create(Auth,compose(
  applyMiddleware(thunk),
  reduxDevtools
))

@connect{
  state => state.auth,
  {login}
}
class App extends Component {
  render() {
    return (
      <div>
      <ul>
      <li>
        <Link to='/'>一营</Link>
      </li>
      <li>
        <Link to='login'>Auth</Link>
      </li>
      <li>
        <Link to='dashboard'>Dashboard</Link>
      </li>
    </ul>
    <Switch>
      <Route path='/login' component={Auth}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Redirect to='/dashboard'></Redirect>
      {/* <Route path='/qibinglian' component={Qibinglian}></Route>
      <Route path='/:localtion' component={Test}></Route> */}
    </Switch>
      </div>
    );
  }
}

export default App;
