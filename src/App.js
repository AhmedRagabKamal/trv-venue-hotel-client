import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './layout/navbar';
import Hotels from './dashboard/hotels/components/hotels/hotels';
import NotFound from './static/not-found/notFound';
import HotelForm from './dashboard/hotels/components/hotels/hotelForm';
import RecommendedHotels from './recommended-hotels/components/recommendedHotels';
import RecommendedHotelDetails from './recommended-hotels/components/RecommendedHotelDetail';
import Confirmation from './confirmation/components/confirmation';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/confirmation/:roomId}" component={Confirmation} />
          <Route
            path="/recommended-hotels/:id"
            component={RecommendedHotelDetails}
          />
          <Route path="/recommended-hotels" component={RecommendedHotels} />
          <Route path="/hotels/:id" component={HotelForm} />
          <Route path="/hotels" component={Hotels} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/recommended-hotels" />
          <Redirect exact to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
