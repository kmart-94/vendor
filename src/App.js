import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shopPage/ShopPage.component.js';
import Header from './components/header/Header.component.js';

function App() {
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
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
