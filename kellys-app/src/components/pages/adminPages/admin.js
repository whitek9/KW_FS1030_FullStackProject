import React from 'react';
import { Switch, Route, useRouteMatch, NavLink, useHistory } from 'react-router-dom';

import Navigation from '../../shared/navigation';
import Sidebar from '../../shared/sidebar.js'
import Submissions from './submissions'
import ManageUsers from './manageUsers'

import '../../../App.css'

const AdminPage = () => {

    const { path } = useRouteMatch()

    let history = useHistory();

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }

    return (
        <div id='outer-container'>
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main class="containerColumn" id="page-wrap">
                <h4>Administrator Portal</h4> 
                <nav className='inPageNav'>
                    <ul>
                        <li> <NavLink to="/admin/users">Add Users</NavLink></li>
                        <li> <NavLink to="/admin/submissions">Form Submissions</NavLink></li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${path}/users`}>
                        <ManageUsers />
                    </Route>
                    <Route path={`${path}/submissions`}>
                        <Submissions />
                    </Route>
                </Switch>
            </main>
        </div>
     );
 }
  
 export default AdminPage;