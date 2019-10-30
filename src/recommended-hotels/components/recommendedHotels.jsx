import React, { Component } from 'react';
import RecommendedHotelsList from './RecommendedHotelsList';
import { getHotels } from '../../dashboard/hotels/services/hotelsService';
import classes from './recommendedHotels.module.css';

class RecommendedHotels extends Component {
  state = {
    hotels: [],
    pageSize: 3,
    currentPage: 1
  };
  async componentDidMount() {
    const hotels = await getHotels();
    this.setState({ hotels });
  }
  render() {
    const { hotels } = this.state;
    return (
      <div className={classes.hotelList}>
        <RecommendedHotelsList hotels={hotels} />
      </div>
    );
  }
}

export default RecommendedHotels;
