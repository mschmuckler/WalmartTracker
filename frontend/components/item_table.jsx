import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchItems, updateBrand } from '../api_util/items_api';

function onBeforeSaveCell(row, cellName, cellValue) {
  if (cellName === "brand") {
    return true;
  } else {
    alert("Only 'Brand' is editable")
    return false;
  }
}

function onAfterSaveCell(row, cellName, cellValue) {
  const data = {
    id: row.id,
    name: row.name,
    brand: cellValue,
  };
  updateBrand(data);
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell,
  afterSaveCell: onAfterSaveCell,
};

class ItemTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: null,
    };

    this.generateTableData = this.generateTableData.bind(this);
  }

  componentDidMount() {
    fetchItems().then(
      (payload) => {
        this.setState({
          tableData: payload,
        });
      }
    );
  }

  generateTableData() {
    return this.state.tableData.items.map(item => {
      return {
        id: item.id,
        image: item.image,
        name: item.name,
        url: item.url,
        brand: item.brand,
        category: item.category,
        price: item.price,
        msrp: item.msrp,
        reviews: item.reviews,
        num_of_reviews: item.num_of_reviews,
      }
    });
  }

  imageFormatter(cell, row) {
    if (cell) {
      return (
        <img style={{ width:50 }} src={ cell } />
      );
    } else {
      return "N/A"
    }
  }

  linkFormatter(cell, row) {
    return (
      <a href={ cell } >
        <img style={{ width:20 }} src="http://www.iconsdb.com/icons/preview/icon-sets/web-2-blue/external-link-xxl.png" />
      </a>
    );
  }

  priceFormatter(cell, row) {
    if (cell) {
      return `$${cell.toFixed(2)}`
    } else {
      return "(none)"
    }
  }

  reviewFormatter(cell, row) {
    if (cell) {
      return `(${cell})`;
    } else {
      return;
    }
  }

  render() {
    if (this.state.tableData) {
      return (
        <div>
          <BootstrapTable data={ this.generateTableData() } bordered={ false } cellEdit={ cellEditProp }>
            <TableHeaderColumn dataField='id' isKey={ true } hidden>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='image' dataFormat={ this.imageFormatter }>Product</TableHeaderColumn>
            <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 1000, placeholder: 'Search Products' }} dataSort></TableHeaderColumn>
            <TableHeaderColumn dataField='url' dataFormat={ this.linkFormatter }></TableHeaderColumn>
            <TableHeaderColumn dataField='brand'>Brand Name</TableHeaderColumn>
            <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
            <TableHeaderColumn dataField='price' dataFormat={ this.priceFormatter }>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='msrp' dataFormat={ this.priceFormatter }>MSRP</TableHeaderColumn>
            <TableHeaderColumn dataField='reviews' dataFormat={ this.imageFormatter }>Reviews</TableHeaderColumn>
            <TableHeaderColumn dataField='num_of_reviews' dataFormat={ this.reviewFormatter }></TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default ItemTable;
