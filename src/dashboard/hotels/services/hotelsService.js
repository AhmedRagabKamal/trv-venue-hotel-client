import http from '../../../core/services/httpService';
import Endpoints from '../../../core/constants/endpoints.constant';

export function getHotels() {
  return http.get(Endpoints.HOTELS_LIST);
}

export function deleteHotel(id) {
  return http.delete(Endpoints.HOTEL_DELETE(id));
}
