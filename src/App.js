import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './layout/navbar';
import DashBoard from './dashboard/dashboard';
import NotFound from './static/not-found/notFound';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
