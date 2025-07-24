import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import type { ColDef } from "ag-grid-community";
import { useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {

  const [rowData, setRowData] = useState([
    { S_NO: 1, Name: "Adarsh Kumar", Address: "Dhanbad", Age: 20 },
    { S_NO: 2, Name: "Raj Kor", Address: "Durgapur", Age: 25 },
    { S_NO: 3, Name: "Akash Mahato", Address: "Kolkata", Age: 60 },
    { S_NO: 4, Name: "Shyam Kumar", Address: "Dhanbad", Age: 20 },
    { S_NO: 5, Name: "Neha Singh", Address: "Ranchi", Age: 23 },
    { S_NO: 6, Name: "Pooja Kumari", Address: "Patna", Age: 30 },
    { S_NO: 7, Name: "Vikash Yadav", Address: "Gaya", Age: 28 },
    { S_NO: 8, Name: "Ritesh Raj", Address: "Delhi", Age: 35 },
    { S_NO: 9, Name: "Sonu Gupta", Address: "Varanasi", Age: 45 },
    { S_NO: 10, Name: "Kiran Jha", Address: "Bhagalpur", Age: 22 },
  ]);

  type RowType = { S_NO: number; Name: string; Address: string; Age: number };

  const columnData: ColDef<RowType>[] = [
    {
      headerName : "S No.",
      field : "S_NO",
      width: 70,
      maxWidth: 70,
      minWidth: 70,
      sortable: false,
      filter: false,
      cellStyle: { textAlign: "center" },
      headerClass: "custom-header"
    },
    {
      headerName : "Name",
      field : "Name"
    },
    {
      headerName : "Address",
      field : "Address",
    },
    {
      headerName : "Age",
      field : "Age"
    }
  ];

  return (
    <>
    
      <div className="w-full h-screen">
        <AgGridReact 
          rowData={rowData}
          columnDefs={columnData}
        />
      </div>
    
    </>
  )
}

export default App;
