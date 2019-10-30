import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HotelModel from '../../dashboard/hotels/models/HotelModel';
import { getHotel } from '../../dashboard/hotels/services/hotelsService';
import classes from './RecommendedHotelDetail.module.css';

class RecommendedHotelDetails extends Component {
  state = {
    hotel: new HotelModel()
  };
  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const hotel = await getHotel(id);
    this.setState({ hotel });
  }
  render() {
    const { hotel } = this.state;
    return (
      <div>
        <div className={classes.hotelGallery}>
          {hotel.images &&
            hotel.images.map(image => (
              <img key={image} src={image} alt={hotel.name} />
            ))}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Max</th>
                <th>price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {hotel.rooms &&
                hotel.rooms.map(room => (
                  <tr key={room.id}>
                    <td>{room.name}</td>
                    <td>{room.max_occupancy}</td>
                    <td>{room.price_in_usd}</td>
                    <td>
                      <Link
                        to={`/confirmation/${room.id}`}
                        className="btn btn-primary"
                      >
                        Book
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RecommendedHotelDetails;
