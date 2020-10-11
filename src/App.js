import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shopPage/ShopPage.component.js';
import Header from './components/header/Header.component.js';
import LogInPage from './pages/log-in/LogInPage.component.js';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

    this.unsubscribeFromAuth = null;
  }


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}, () => console.log(this.state));
  
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      {/*switch wraps Route tags to display the first page whose path 
      matches path specified unless exact specifies otherwise. */}
        <Switch>
        {/* 3 main argumenta are exact, path, and component */}
        {/* component is just the component we want to render*/}
        {/* path is a string of the path from the current place we are at */}
        {/* exact is true or false and decides if  path must be exactly the specified path for it to render. prevents or allows stacked rendering*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={LogInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
