import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ItemPercentageChart extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      defaultSortName: 'count',
      defaultSortOrder: 'desc',
    };

    this.generateChartData = this.generateChartData.bind(this);
    this.calculateSelectedCount = this.calculateSelectedCount.bind(this);
  }

  generateChartData() {
    const totalCountOfSelected = this.calculateSelectedCount();
    return Object.keys(this.props.searchResults.brandCounts).map((key, idx) => {
      const count = this.props.searchResults.brandCounts[key];
      const percentOfTotal = ((count / this.props.searchResults.totalCount) * 100).toFixed(2);
      const percentOfSelected = ((count / totalCountOfSelected) * 100).toFixed(2);
      return {
        brand: key,
        count,
        percentOfTotal: `${percentOfTotal}%`,
        percentOfSelected: `${percentOfSelected}%`,
      };
    });
  }

  calculateSelectedCount() {
    return Object.values(this.props.searchResults.brandCounts).reduce((sum, value) => {
      return (sum + value);
    }, 0);
  }

  render() {
    if (this.props.searchResults) {
      const totalCountOfSelected = this.calculateSelectedCount();

      return (
        <div>
          <h3>{ `Total Products Found: ${this.props.searchResults.totalCount}` }</h3>
          <h3>{ `Products Found of Selected Brands: ${totalCountOfSelected}` }</h3>
          <BootstrapTable data={ this.generateChartData() } options={ this.options }>
            <TableHeaderColumn dataField='brand' isKey={ true }>Brand</TableHeaderColumn>
            <TableHeaderColumn dataField='count' dataSort>Count</TableHeaderColumn>
            <TableHeaderColumn dataField='percentOfTotal'>Percent of Total</TableHeaderColumn>
            <TableHeaderColumn dataField='percentOfSelected'>Percent of Selected</TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default ItemPercentageChart;
