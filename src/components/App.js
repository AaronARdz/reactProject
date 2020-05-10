import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import notFound from '../pages/NotFound';


function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={notFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
