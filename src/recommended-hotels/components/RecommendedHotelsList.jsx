import React from 'react';
import RecommendedHotelsItem from './RecommendedHotelsItem';

const RecommendedHotelsList = ({ hotels }) => {
  return (
    <React.Fragment>
      {hotels.map(hotel => (
        <RecommendedHotelsItem key={hotel.id} hotel={hotel} />
      ))}
    </React.Fragment>
  );
};

export default RecommendedHotelsList;
