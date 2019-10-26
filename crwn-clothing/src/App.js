import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignIn from './components/sign-in/sign-in.component';

import './App.css';
const App = () => {
  return(
    <div>
      <Header/>
      <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn}/>
      </Switch>
    </div>
  )
}

export default App;