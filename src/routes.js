import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import SignIn from './components/SignIn'

export default (
    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/signin' component={SignIn}/>
    </Route>
)