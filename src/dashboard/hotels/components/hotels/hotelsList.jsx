import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../../common/components/table';

const HotelsList = ({ hotels, onDelete, onSort, columnSort }) => {
  const columns = [
    {
      path: 'name',
      label: 'Name',
      content: hotel => (
        <Link style={{ cursor: 'pointer' }} to={`/hotels/${hotel.id}`}>
          {hotel.name}
        </Link>
      )
    },
    { path: 'description', label: 'Description' },
    { path: 'distance_to_venue', label: 'Distance to venue' },
    { path: 'rating', label: 'Rating' },
    { path: 'price_category', label: 'Price category' },
    {
      key: 'delete',
      content: hotel => (
        <button
          onClick={() => onDelete(hotel)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  return (
    <Table
      columns={columns}
      onSort={onSort}
      columnSort={columnSort}
      items={hotels}
    />
  );
};

export default HotelsList;
