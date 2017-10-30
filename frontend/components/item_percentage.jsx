import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import { fetchSearchQueries, fetchBrands } from '../api_util/items_api';

class ItemPercentage extends React.Component {
  constructor() {
    super();
    this.state = {
      allSearchQueries: [],
      allBrands: [],
      startDate: null,
      endDate: null,
      searchQuery: "",
      brandInput: "",
      selectedBrands: [],
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this);
    this.handleBrandInput = this.handleBrandInput.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
  }

  componentDidMount() {
    fetchSearchQueries().then(
      (payload) => {
        this.setState({
          allSearchQueries: payload,
        });
      }
    );

    fetchBrands().then(
      (payload) => {
        this.setState({
          allBrands: payload,
        });
      }
    );
  }

  handleStartDateChange(e, date) {
    this.setState({
      startDate: date,
    });
  }

  handleEndDateChange(e, date) {
    this.setState({
      endDate: date,
    });
  }

  handleSearchQueryInput(searchQuery) {
    this.setState({
      searchQuery: searchQuery,
    });
  };

  handleBrandInput(brandInput) {
    this.setState({
      brandInput: brandInput,
    });
  };

  handleBrandClick(brandClick) {
    console.log(brandClick);
    let newSelectedBrands = this.state.selectedBrands;
    newSelectedBrands.push(brandClick);
    this.setState({
      selectedBrands: newSelectedBrands,
      brandInput: "",
    });
  }

  render() {
    return (
      <div id="item-percentage" >
        <DatePicker
          hintText="Start Date"
          value={ this.state.startDate }
          onChange={ this.handleStartDateChange }
        />
        <DatePicker
          hintText="End Date"
          value={ this.state.endDate }
          onChange={ this.handleEndDateChange }
        />
        <AutoComplete
          hintText="Enter Search Query"
          searchText={ this.state.searchQuery }
          onUpdateInput={ this.handleSearchQueryInput }
          dataSource={ this.state.allSearchQueries }
          filter={ (searchQuery, key) => (key.indexOf(searchQuery) !== -1) }
          openOnFocus={ true }
        />
        <AutoComplete
          hintText="Find a Brand"
          searchText={ this.state.brandInput }
          onUpdateInput={ this.handleBrandInput }
          onNewRequest={ this.handleBrandClick }
          dataSource={ this.state.allBrands }
          filter={ (brandInput, key) => (key.indexOf(brandInput) !== -1) }
          openOnFocus={ true }
        />

        <button onClick={()=>{console.log(this.state)}} >GetState</button>
      </div>
    );
  }
}

export default ItemPercentage;
