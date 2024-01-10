import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const Tabledata = () => {
const[sheetdata, setSheetdata] = useState()
console.log("///",sheetdata)

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/20fu4zxf3bnf2');
        const data = await response.json();
        setSheetdata(data);
        console.log("sheetdata", data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <Table striped bordered hover style={{ width: '30%',height: "10%", margin: '20px auto' }} >
    <thead>
      <tr>
        <th>Month</th>
        <th>Emissions(in CO2e)</th>
        <th>REVENUE/EMISSION RATIO</th>
        <th>YOY R/E Change</th>
      </tr>
    </thead>
    <tbody> 
    {sheetdata?.map((item, index) => (
          <tr key={index}>
            <td>{item['Month ']}</td>
            <td>{item['Emissions(in CO2e)']}</td>
            <td>{item['R/E']}</td>
            <td>{item['YOY R/E Change']}</td>
          </tr>
        ))}
    </tbody>
  </Table>
  )
}

export default Tabledata