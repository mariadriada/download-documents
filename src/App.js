import React from 'react';
import { Router,Route, Switch } from 'react-router-dom'
import { history } from './helpers'
import { Controls } from './components/Controls'

function App() {
  return (
      <Router history = {history}>
        <Switch>
          <Route exact path='/' component={Controls} />
        </Switch>
      </Router>   
  );
}

export default App;
