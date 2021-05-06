import './App.css';
import React, { Component, useState } from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/pages/NotFound'



const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  return (
    <GithubState>
      <AlertState>
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
              <Route exact path='/' >
                <Search  
                showClear={users.length>0}
              />
                <Users />
            </Route>
            <Route path='/about' ><About /></Route>
            <Route path='/user/:login' render={props => (
              <User {...props} />
            )} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

      </AlertState>
      </GithubState>

  );
}


export default App;
