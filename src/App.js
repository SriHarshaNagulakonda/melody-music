import './App.css';
import React, { Component, useState } from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Songs from './components/songs/Songs'
import Song from './components/songs/Song'
import axios from 'axios'
import Search from './components/songs/Search';
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import SaavnState from './context/saavn/saavnState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/pages/NotFound'



const App = () => {

  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  return (
    <SaavnState>
      <AlertState>
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
              <Route exact path='/' >
                <Search  
                showClear={songs.length>0}
              />
                <Songs />
            </Route>
            <Route path='/about' ><About /></Route>
            <Route path='/song/:songname/:songid' render={props => (
              <Song {...props} />
            )} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

      </AlertState>
      </SaavnState>

  );
}


export default App;
