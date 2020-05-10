import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  return (
    //React Fragment, reemplaza el div, para no tener DIVS innecesarios
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
    );
}

export default Layout;
