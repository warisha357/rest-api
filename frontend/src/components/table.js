import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function App() {
  const [Data , setData ] = useState("");

  useEffect(()=>{
    async function findAll () {
      fetch("http://localhost:3005/api/findAll")
       .then((Response)=>{
        if (Response.ok){
           Response.json() .then(Data=>setData(Data))

        } else{
          throw new Error('Failed to fetch data'); 
        }

      })
    }
    findAll()
  }
    ,[])
    
   

  const columns = [
    {
      name: "Doctor id",
      selector: (row) => row.DOCTOR_ID, // Use 'name' (lowercase) as defined in data
    },
    {
      name: "APPOINTMENT d",
      selector: (row) => row.APPOINTMENT_DATE,
    },
    {
      name: "patient n",
      selector: (row) => row.PAT_NAME,
    },
  ];

  return (
    <div className="container mt-5">
        <DataTable
            columns={columns}
            data={Data}
           
  

        />
    </div>
  );
}


export default App;
