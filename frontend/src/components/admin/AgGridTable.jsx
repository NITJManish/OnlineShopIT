import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const AgGridTable = () => {
    const data=[
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
        {name:'Dan',category:'Book',quantity:30,amount:450},
    ]

    const columns=[
        {
            headerName:"Product Name",field:'name',sortable:true,editable:true,filter:true
        },
        {
            headerName:'Category',field:"category"
        },
        {
            headerName:'Quantity',field:"quantity"
        },
        {
            headerName:'Amount',field:"amount"
        },
    ]
  return (
   <div className='mt-10'>
     <div className='ag-theme-alpine ' style={{
        height:'400px',width:'850px'
    }}>
    <label className='d-flex justify-content-center align-center'>Table</label>
    <AgGridReact rowData={data} columnDefs={columns} />
      
    </div>
   </div>
  )
}


export default AgGridTable
