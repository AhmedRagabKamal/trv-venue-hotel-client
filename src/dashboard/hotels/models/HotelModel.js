import { get } from 'lodash-es';
// import RoomModel from './RoomModel';

class HotelModel {
  constructor(hotel = {}) {
    this.name = get(hotel, 'name', '');
    this.description = get(hotel, 'description', '');
    this.distance_to_venue = get(hotel, 'distance_to_venue', '');
    this.rating = get(hotel, 'rating', '');
    this.price_category = get(hotel, 'price_category', '');
    this.amenities = get(hotel, 'amenities', '');
    if (hotel.id) {
      this.id = get(hotel, 'id', '');
    }
    // if (hotel.images) {
    //   this.images = get(hotel, 'images', []);
    // }
    // if (hotel.rooms) {
    //   this.rooms = get(hotel, 'rooms', []).map(room => new RoomModel(room));
    // }
  }
}

export default HotelModel;
