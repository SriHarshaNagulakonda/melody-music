import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: '',
    user: {},
    repos: []
  }

  clearUsers = async (text) => {
    this.setState({users: []})
  }

  setAlert = (msg,type) => {
    this.setState({alert: {msg:msg,type:type}})

    setTimeout(() => this.setState({alert:null}),5000)
  }

  getUser = async (username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res.data);
    this.setState({user: res.data,loading:false})
  }

  getUserRepos = async (username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    console.log(res.data);
    this.setState({repos: res.data,loading:false})
  }

  searchUsers = async (text) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items,loading:false})
  }

  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data,loading:false})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
                <Route exact path='/' >
                  <Search searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers}  
                  showClear={this.state.users.length>0}
                  setAlert={this.setAlert}
                />
                 <Users loading={this.state.loading} users={this.state.users} />
              </Route>
              <Route path='/about' ><About /></Route>
              <Route path='/user/:login' render={props => (
                <User 
                    {...props} 
                    getUser={this.getUser} 
                    user={this.state.user} 
                    loading={this.state.loading}
                    repos={this.state.repos} 
                    getUserRepos={this.getUserRepos} 
                  />
              )} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
