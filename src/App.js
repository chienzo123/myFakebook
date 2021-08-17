import React, { Fragment, useEffect, useState } from 'react';
import './App.sass';
import Header from './components/header/hader';
import LeftSidebar from './components/leftSlidebar/leftSlidebar';
import Feed from './components/feed/feed';
import RightSidebar from './components/rightSlidebar/rightSlidebar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from './firebase';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Watch from "./components/watch/watch";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
         <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
                <img src="https://i.postimg.cc/BQ0LGKgT/Fakebook-Logo.png" alt="" />
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      
        </div>
       
       
       </div>
        
    );
  }
  
  return (
    <div className="mainwrp app">
        <Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          { <div className="app__body">
            <LeftSidebar />
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/watch" component={Watch}/>
              
            </Switch>
            
            <RightSidebar /> 
          </div> }
          </Router>
        </Fragment>
      
    </div>
  );
}

export default App;
