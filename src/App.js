import React, { Fragment } from 'react';
import './App.sass';
import Header from './components/header/hader';
 import LeftSidebar from './components/leftSlidebar/leftSlidebar';
 import Feed from './components/feed/feed';
 import RightSidebar from './components/rightSlidebar/rightSlidebar';


function App() {
  return (
    <div className="mainwrp app">
     
        <Fragment>
          <Header />
          { <div className="app__body">
            <LeftSidebar />
             <Feed />
            <RightSidebar /> 
          </div> }
        </Fragment>
      
    </div>
  );
}

export default App;
