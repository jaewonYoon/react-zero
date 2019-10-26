import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignIn from './components/sign-in/sign-in.component';
import {auth} from './firebase/firebase.util';
import './App.css';
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser: user}); 
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component = {HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignIn}/>
        </Switch>
      </div>
    )
  }
}

export default App;