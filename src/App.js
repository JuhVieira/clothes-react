  
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Products from './containers/Products/Products';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;