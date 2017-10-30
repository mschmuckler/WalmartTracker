import React from 'react';

class ItemPercentageChart extends React.Component {
  constructor(props) {
    super(props);
    this.generateChartData = this.generateChartData.bind(this);
  }

  generateChartData() {
    const totalCountOfSelected = Object.values(this.props.searchResults.brandCounts).reduce((sum, value) => {
      return (sum + value);
    }, 0);
    return Object.keys(this.props.searchResults.brandCounts).map((key, idx) => {
      const count = this.props.searchResults.brandCounts[key];
      const percentOfTotal = ((count / this.props.searchResults.totalCount) * 100).toFixed(2);
      const percentOfSelected = ((count / totalCountOfSelected) * 100).toFixed(2);
      return (
        <li key={ idx } >{
          `${key}: ${percentOfTotal}%, ${percentOfSelected}% (${count})`
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
