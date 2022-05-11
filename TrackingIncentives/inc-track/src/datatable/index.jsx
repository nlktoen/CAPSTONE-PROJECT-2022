import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
//import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'react-bootstrap//react-bootstrap-table2.css'

    //npm install @types/react-bootstrap-table-next
export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <ReactBootStrap.Table responsive = 'md' striped bordered hover cellPadding={3} cellSpacing={3}>
      <thead>
        <tr>
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
          {data.map(row => <tr> 
              {columns.map(column => <td> {row[column]}</td>)}
              </tr>)}
      </tbody>
    </ReactBootStrap.Table>
  );
}