import React from 'react';

class ItemPercentageChart extends React.Component {
  constructor(props) {
    super(props);
    this.generateChartData = this.generateChartData.bind(this);
  }

  generateChartData() {
    return Object.keys(this.props.searchResults.brandCounts).map((key, idx) => {
      let count = this.props.searchResults.brandCounts[key];
      let percent = ((count / this.props.searchResults.totalCount) * 100).toFixed(2);
      return (
        <li key={ idx } >{
          `${key}: ${percent}% (${count})`
        }</li>
      );
    });
  }

  render() {
    if (this.props.searchResults) {
      return (
        <div>
          <h1>{ `Total Count: ${this.props.searchResults.totalCount}` }</h1>
          <ul>
            { this.generateChartData() }
          </ul>
        </div>
      );
    } else {
      return <span>No results</span>
    }
  }
}

export default ItemPercentageChart;
