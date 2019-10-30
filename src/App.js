import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './layout/navbar';
import Hotels from './dashboard/hotels/components/hotels/hotels';
import NotFound from './static/not-found/notFound';
import HotelForm from './dashboard/hotels/components/hotels/hotelForm';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/hotels/:id" component={HotelForm} />
          <Route path="/hotels" component={Hotels} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
