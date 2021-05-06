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




const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


  const clearUsers = async (text) => {
    setUsers([])
    setLoading(false)
  }

  const showAlert = (msg,type) => {
    setAlert({msg:msg,type:type})
    setTimeout(() => setAlert(null),5000)
  }

  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res.data);
    setUser(res.data)
    setLoading(false)
  }

  const getUserRepos = async (username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=created:asc`);
    console.log(res.data);
    this.setState({repos: res.data,loading:false})
  }

  const searchUsers = async (text) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items)
    setLoading(false)  
  }

  return (
    <GithubState>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
              <Route exact path='/' >
                <Search searchUsers={searchUsers} 
                clearUsers={clearUsers}  
                showClear={users.length>0}
                setAlert={showAlert}
              />
                <Users loading={loading} users={users} />
            </Route>
            <Route path='/about' ><About /></Route>
            <Route path='/user/:login' render={props => (
              <User 
                  {...props} 
                  getUser={getUser} 
                  user={user} 
                  loading={loading}
                  repos={repos} 
                  getUserRepos={getUserRepos} 
                />
            )} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </GithubState>

  );
}


export default App;
