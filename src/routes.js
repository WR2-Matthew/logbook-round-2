import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Changes from './components/Changes/Changes'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

export default (

  <Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/new' component={Form} />
    <Route path='/change' component={Changes} />
  </Switch>

)

