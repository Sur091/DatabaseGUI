import React from 'react';
// import template from "./Database.jsx";
// import employees from "./employees.json";
import "./Database.css"
import { useState, useEffect } from 'react';


function Database() {

  async function getDataFromProjectB() {
    try {
      const response = await fetch('http://localhost:3001/employees'); // Replace with actual URL
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Data from Project B:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const employees = getDataFromProjectB();
  // if (!employees) {
  //   return <p>No data available</p>;
  // }
  const [tableData, setTableData] = useState(employees);

  const handleUpdateData = (updatedData) => {
    setTableData(updatedData);
    updateJsonFile(updatedData); // Call updateJsonFile function here
  };

  const [rows, setRows] = useState(tableData);

  const handleEdit = (rowIndex, field, value) => {
    const updatedRows = [...rows]; // Copy current data
    updatedRows[rowIndex][field] = value; // Update specific cell
    setRows(updatedRows); // Update state with changes
  };

  const updateJsonFile = async (updatedData) => {
    // Replace with your logic to update the JSON file (e.g., using fetch API)
    console.log('JSON Updated:', updatedData); // Placeholder for now
  };

  useEffect(() => {
    setTableData(rows); // Call onUpdate prop with updated data on state change
  }, [rows]);

  // Extract table headers from the first object
  const headers = Object.keys(employees[0]);
  return (
    <div className="database">
      <div className="employees">
        <div className="table-name">Employees</div>
        <table>
          <thead>
            <tr>
            {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row['Employee ID']}>
                  {Object.keys(row).map((field, colIndex) => (
                    <td key={`${rowIndex}-${colIndex}`}>
                      {field === 'EmpSalary' ? ( // Handle numeric input for salary
                        <input
                          type="number"
                          value={row[field]}
                          onChange={(e) => handleEdit(rowIndex, field, e.target.value)}
                        />
                      ) : (field === 'Employee ID' ? (
                        <span>{row[field]}</span>
                      ):(
                        <input
                          value={row[field]}
                          onChange={(e) => handleEdit(rowIndex, field, e.target.value)}
                        />
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Database;
