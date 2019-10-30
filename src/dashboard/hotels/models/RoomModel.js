import { get } from 'lodash-es';

class RoomModel {
  constructor(room = {}) {
    this.id = get(room, 'id', '');
    this.name = get(room, 'name', '');
    this.description = get(room, 'description', '');
    this.max_occupancy = get(room, 'max_occupancy', '');
    this.price_in_usd = get(room, 'price_in_usd', '');
  }
}

export default RoomModel;
