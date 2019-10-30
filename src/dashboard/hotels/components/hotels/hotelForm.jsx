import React from 'react';
import Joi from 'joi-browser';
import Form from '../../../../common/components/form';
import HotelModel from '../../models/HotelModel';
import { getHotel, saveHotel } from '../../services/hotelsService';

class HotelForm extends Form {
  state = {
    data: new HotelModel(),
    errors: {}
  };

  schema = {
    id: Joi.string(),
    name: Joi.string()
      .required()
      .label('Name'),
    description: Joi.string()
      .required()
      .label('Description'),
    distance_to_venue: Joi.number()
      .integer()
      .required()
      .label('Distance to venue'),
    rating: Joi.number()
      .required()
      .min(0)
      .max(5)
      .label('Rating'),
    price_category: Joi.string()
      .required()
      .label('Price category'),
    amenities: Joi.required().label('Amenities')
  };

  async populateHotel() {
    try {
      const hotelId = this.props.match.params.id;
      if (hotelId === 'new') return;
      const hotel = await getHotel(hotelId);
      this.setState({ data: hotel });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found');
    }
  }

  async componentDidMount() {
    await this.populateHotel();
  }

  doSubmit = async () => {
    await saveHotel(this.state.data);
    this.props.history.push('/hotels');
  };

  render() {
    const priceCategories = ['low', 'medium', 'high'];
    const amenities = [
      'free_parking',
      'free_wifi',
      'pets',
      'restaurant',
      'gym',
      'pool',
      'spa'
    ];
    return (
      <div>
        <h1>Hotel Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('name', 'Name')}
          {this.renderTextarea('description', 'Description')}
          {this.renderInput('distance_to_venue', 'Distance to venue', 'number')}
          {this.renderInput('rating', 'Rating', 'number')}
          {this.renderSelect(
            'price_category',
            'Price category',
            priceCategories
          )}
          {this.renderSelect('amenities', 'Amenities', amenities, true)}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default HotelForm;
