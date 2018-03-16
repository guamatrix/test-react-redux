import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import './App.css'

const App = () => (
  <div className="container">
    <header>
      <h1 className="title is-1 has-text-centered">Intive - FDV Exercise</h1>
    </header>
    <Route exact path="/" component={Home} />
  </div>
)

export default App
