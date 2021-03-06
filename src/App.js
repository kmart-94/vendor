import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';

import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shopPage/ShopPage.component.js';
import Header from './components/header/Header.component.js';
import LogInPage from './pages/log-in/LogInPage.component.js';
import CheckoutPage from './pages/checkout/CheckoutPage.component';

import {auth, createUserProfileDoc} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.unsubscribeFromAuth = null;
  }


  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
  
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} =this.props;
    return (
      <div>
        <Header />
      {/*switch wraps Route tags to display the first page whose path 
      matches path specified unless exact specifies otherwise. */}
        <Switch>
        {/* 3 main argumenta are exact, path, and component */}
        {/* component is just the component we want to render*/}
        {/* path is a string of the path from the current place we are at */}
        {/* exact is true or false and decides if  path must be exactly the specified path for it to render. prevents or allows stacked rendering*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => currentUser ? <Redirect to='/'/> : <LogInPage/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}) 

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
