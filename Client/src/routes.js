import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import SignIn from './components/SignIn'
import UserListPage from './components/UserListPage'
import PollListPage from './components/PollListPage'
import NewPoll from './components/NewPoll'
import PollViewPage from './components/PollViewPage'

export default (
    <Route component={App}>
        <Route name='home' path='/' component={Home}/>
        <Route name='register' path='/register' component={Register}/>
        <Route path='/register/:id' component={Register} />        
        <Route name='signin' path='/signin' component={SignIn}/>
        <Route name='userList' path='/users' component={UserListPage}/>      
        <Route path='/polls' component={PollListPage}/>
        <Route path='/polls/:username' component={PollListPage}/>
        <Route path='/details' component={PollViewPage}/>
        <Route path='/details/:id' component={PollViewPage}/>
        <Route path='/poll/new' component={NewPoll}/>
        <Route path='/poll/edit' component={NewPoll}/>
        <Route path='/poll/edit/:id' component={NewPoll}/>
    </Route>
)