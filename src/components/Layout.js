import React from 'react';

import Header from './header';
import SubHeader from './subHeader';
import Content from './content';


function Layout() {
  return (
    <div className="layout">
          <Header />
        <SubHeader />
        <Content/>
    </div>
  );
}

export default Layout;
