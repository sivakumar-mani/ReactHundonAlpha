import React from 'react';

import Header from './header';
import SubHeader from './subHeader';
import Content from './content';
import {BrowserRouter as Router} from "react-router-dom";



function Layout() {
  return (
    <div className="layout">
      <Router>
          <Header />
        <SubHeader />
        <Content/>
        </Router>
    </div>
  );
}

export default Layout;
