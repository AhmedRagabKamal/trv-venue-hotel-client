import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { orderBy } from 'lodash-es';
import HotelsList from './hotelsList';
import { getHotels, deleteHotel } from '../../services/hotelsService';
import { paginate } from '../../../../utils/paginate';
import SearchBox from '../../../../common/components/searchBox';
import Pagination from '../../../../common/components/pagination';

class Hotels extends Component {
  state = {
    hotels: [],
    pageSize: 3,
    currentPage: 1,
    columnSort: { path: 'name', order: 'asc' },
    search: ''
  };

  async componentDidMount() {
    const hotels = await getHotels();
    this.setState({ hotels });
  }

  handleDelete = async hotel => {
    const originalHotels = this.state.hotels;
    const hotels = originalHotels.filter(h => h.id !== hotel.id);
    this.setState({ hotels });
    try {
      await deleteHotel(hotel.id);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This hotel has already been deleted.');
      this.setState({ hotels: originalHotels });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = columnSort => {
    this.setState({ columnSort });
  };
  handleSearch = search => {
    this.setState({ search, currentPage: 1 });
  };

  render() {
    const {
      hotels: allHotels,
      pageSize,
      currentPage,
      columnSort,
      search
    } = this.state;
    const { length: count } = allHotels;
    const { history } = this.props;
    if (count === 0) return <p>There is no hotels in database</p>;
    let filtered = allHotels;
    if (search) {
      filtered = allHotels.filter(hotel =>
        hotel.name.toLowerCase().startsWith(search.toLocaleLowerCase())
      );
    }
    const sorted = orderBy(filtered, [columnSort.path], [columnSort.order]);
    const hotels = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <h1>Hotels</h1>
        <button
          onClick={() => history.push('/hotels/new')}
          className="btn btn-primary btn-sm"
        >
          New hotel
        </button>
        <SearchBox value={search} onChange={this.handleSearch} />
        <HotelsList
          hotels={hotels}
          onLiked={this.handleLiked}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
          columnSort={columnSort}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Hotels;
