import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import { fetchSearchQueries } from '../api_util/items_api';

class ItemPercentage extends React.Component {
  constructor() {
    super();
    this.state = {
      allSearchQueries: [],
      startDate: null,
      endDate: null,
      searchQuery: "",
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this);
  }

  componentDidMount() {
    fetchSearchQueries().then(
      (payload) => {
        this.setState({
          allSearchQueries: payload,
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
          hintText="Enter search query"
          searchText={ this.state.searchQuery }
          onUpdateInput={ this.handleSearchQueryInput }
          dataSource={ this.state.allSearchQueries }
          filter={ (searchQuery, key) => (key.indexOf(searchQuery) !== -1) }
          openOnFocus={ true }
        />

        <button onClick={()=>{console.log(this.state)}} >GetState</button>
      </div>
    );
  }
}

export default ItemPercentage;
