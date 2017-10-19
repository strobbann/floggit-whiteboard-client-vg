import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Whiteboards from '../pages/Whiteboards';
import Notes from '../pages/Notes';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Whiteboards} />
      <Route exact path="/whiteboards/:id" component={Notes} />
    </div>
  </BrowserRouter>
);

export default Routes;
