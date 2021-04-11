import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Work from './components/pages/Work'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/work' component={Work}></Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        ERROR 404, page not found<code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default App;
