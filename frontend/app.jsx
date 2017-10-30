import React from 'react';
import ItemPercentage from './components/item_percentage';
import ItemTable from './components/item_table';

const App = (props) => {
  return (
    <div id="app" >
      <ItemPercentage />
      <ItemTable />
    </div>
  );
};

export default App;
