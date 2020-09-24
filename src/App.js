import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Teams from './pages/Teams'
import Message from './pages/Message'
import Support from './pages/Support'

function App() {
  return (
    <div className="App">
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/reports' component={ Reports } />
        <Route path='/products' component={ Products } />
        <Route path='/teams' component={ Teams } />
        <Route path='/messages' component={ Message } />
        <Route path='/support' component={ Support } />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
