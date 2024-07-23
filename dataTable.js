import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import  {columns,rows} from './dataTable.constants'

const DataTable = () => {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    const filteredData = rows.filter(row =>
      row.name.toLowerCase().includes(inputValue)
    );

    setFilteredRows(filteredData);
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        className='inputSearch'
        placeholder="Search by name..."
        style={{ marginBottom: 10, padding: 8 }}
      />

<button className="button"> + Add Customer</button>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5} 
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
