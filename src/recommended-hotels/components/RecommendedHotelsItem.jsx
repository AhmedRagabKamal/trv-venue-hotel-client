import React from 'react';
import classes from './RecommendedHotelsItem.module.css';
import { Link } from 'react-router-dom';

const RecommendedHotelsItem = ({ hotel }) => {
  return (
    <div className={classes.container}>
      <div className={classes.hotelImage}>
        <img src={hotel.images && hotel.images[0]} alt={hotel.name} />
      </div>
      <div className={classes.hotelInfo}>
        <div className={classes.hotelName}>
          <h5>{hotel.name}</h5>
          <div className={classes.rating}>
            <span className={classes.ratingNumber}>{hotel.rating}</span>
          </div>
        </div>
        <div>{hotel.description}</div>
        <div className={classes.seeRoom}>
          <Link
            className="btn btn-success"
            to={`/recommended-hotels/${hotel.id}`}
          >
            See rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedHotelsItem;
