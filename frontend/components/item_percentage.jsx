import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class ItemPercentage extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: null,
      endDate: null,
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
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

  render() {
    return (
      <div id="item-percentage" >
        <DatePicker
          hintText="Start Date"
          value={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          hintText="End Date"
          value={this.state.endDate}
          onChange={this.handleEndDateChange}
        />

      <button onClick={()=>{console.log(this.state)}} >GetState</button>
      </div>
    );
  }
}

export default ItemPercentage;
