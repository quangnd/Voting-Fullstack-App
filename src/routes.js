import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import SignIn from './components/SignIn'
import UserListPage from './components/UserListPage'

export default (
    <Route component={App}>
        <Route name='home' path='/' component={Home}/>
        <Route name='register' path='/register' component={Register}/>
        <Route name='signin' path='/signin' component={SignIn}/>
        <Route name='userList' path='/users' component={UserListPage}/>
    </Route>
)