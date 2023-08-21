// import { useState } from "react";


// import "./App.css";
// import { Modal } from "./Components/Modal";
// import { Table } from "./Components/Table";

// function App() {
// const [modalOpen, setModalOpen] = useState(false)

// const rows = [rows, setRows] = useState ([
//  {page: "office task-1", description: "This is description for my first task", status: "notcompleted" }, 
//  {page: "office task-2", description: "This is description for my second task", status: "completed" }, 
//  {page: "office task-3", description: "This is description for my third task", status: "notcompleted" } 

// ]);

// const handleDeleteRow = (targetIndex) => (
//   setRows(rows.filter((_, idx) => idx !== targetIndex))
// )


//    return (
//    <div className="App">
//   <Table rows={rows} deleteRow={handleDeleteRow}>My todo</Table> 
//   <button className="btn" onClick={() => setModalOpen(true)}>Add</button>
//    {modalOpen && (
//    <Modal 
//    closedModal={() =>{
//     setModalOpen(false);
//    }}
//    />
// )}
//    </div>
//    ); 
//   }

// export default App;

import { useState } from "react";

import "./App.css";
import { Modal } from "./Components/Modal";
import { Table } from "./Components/Table";


function App() {
  const [modalOpen, setModalOpen] = useState(false);
const [rows, setRows] = useState ([
  {page: "Task 1", description: "This is the first task", status: "notcompleted"},
  {page: "Page 2", description: "This is the second task", status: "completed"},
  {page: "Page 3", description: "This is the third task", status: "notcompleted"},
]);

const [rowToEdit, setRowToEdit] = useState(null)


const handleDeleteRow = (targetIndex) => {
  setRows(rows.filter((_, idx) => idx !== targetIndex))
};
const handleEditRow = (idx) => {
  setRowToEdit(idx);

  setModalOpen(true);
};

const handleSubmit = (newRow) => {
  rowToEdit === null
   ?  setRows([...rows, newRow]) 
   :  setRows(
    rows.map((currRow, idx) => {
    if (idx !== rowToEdit) return currRow

    return newRow;
  })
  );
};

  return (
    <div className="App"> 
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
      <button className="btn" onClick={() =>setModalOpen(true)}>Add</button>
      {modalOpen && (
      <Modal closeModal={() => {
        setModalOpen(false);
      } } 
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !== null && rows[rowToEdit]}
      />
      )}
    </div>
  )
}


export default App;
