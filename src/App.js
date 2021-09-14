
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/common/Home'
import Blog from './components/common/Blog'


function App() {
  return (   
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Blog" component={Blog} />
      </Switch>
      </BrowserRouter>
  )
}

export default App;
