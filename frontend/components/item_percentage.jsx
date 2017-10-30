import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import {
  fetchSearchQueries,
  fetchBrands,
  fetchItemPercentages
} from '../api_util/items_api';

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
      brandKeyCounter: 0,
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this);
    this.handleBrandInput = this.handleBrandInput.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let newSelectedBrands = this.state.selectedBrands;
    newSelectedBrands.push({
      key: this.state.brandKeyCounter,
      label: brandClick,
    });
    this.setState({
      selectedBrands: newSelectedBrands,
      brandInput: "",
      brandKeyCounter: (this.state.brandKeyCounter + 1),
    });
  }

  handleRequestDelete(key) {
    let newSelectedBrands = this.state.selectedBrands;
    const chipToDelete = newSelectedBrands.map((chip) => chip.key).indexOf(key);
    newSelectedBrands.splice(chipToDelete, 1);
    this.setState({ selectedBrands: newSelectedBrands });
  };

  renderChip(data) {
    return (
      <Chip
        key={ data.key }
        onRequestDelete={ () => this.handleRequestDelete(data.key) }
      >
        { data.label }
      </Chip>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let selectedBrands = this.state.selectedBrands.map(el => {
      return el.label;
    });
    const data = {
      searchQuery: this.state.searchQuery,
      selectedBrands,
      startDate: this.state.startDate.toISOString(),
      endDate: this.state.endDate.toISOString(),
    };
    fetchItemPercentages(data).then(
      (payload) => { console.log(payload) }
    );
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
        <div>
          { this.state.selectedBrands.map(this.renderChip, this) }
        </div>
        <RaisedButton
          label="Submit"
          onClick={ this.handleSubmit }
        />
      </div>
    );
  }
}

export default ItemPercentage;
