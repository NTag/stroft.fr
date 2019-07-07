import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import OrderEp from './pages/OrderEp';
import OrderSuccess from './pages/OrderSuccess';
import OrderError from './pages/OrderError';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/ep" component={OrderEp} />
        <Route exact path="/order/success" component={OrderSuccess} />
        <Route exact path="/order/canceled" component={OrderError} />
      </div>
    </Router>
  );
};
