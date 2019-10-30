import http from '../../../core/services/httpService';
import Endpoints from '../../../core/constants/endpoints.constant';
import HotelModel from '../models/HotelModel';

export function getHotels() {
  return http
    .get(Endpoints.HOTELS_LIST)
    .then(({ data: hotels }) => hotels.map(hotel => new HotelModel(hotel)));
}

export function getHotel(id) {
  return http
    .get(Endpoints.HOTEL_GET(id))
    .then(({ data: hotel }) => new HotelModel(hotel));
}

export function deleteHotel(id) {
  return http.delete(Endpoints.HOTEL_DELETE(id));
}

export function saveHotel(hotel) {
  if (hotel.id) {
    return http.put(Endpoints.HOTEL_PUT(hotel.id), hotel);
  }
  return http.post(Endpoints.HOTEL_POST, hotel);
}
