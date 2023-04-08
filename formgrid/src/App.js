import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import EmployeeForm from './MyForm.js';
import MyGrid from './MyGrid';

function App() {

  const [employees, setEmployee] = useState([]);

  const SubmitEmployeeHanlder = (employee) => {
    if(employees.filter(e => e.Name === employee.Name).length > 0) {
      return;
    }
    setEmployee((prevEmployees) => {
      return [...prevEmployees, employee];
    });
  }

  return (
    <div className="phone-screen">
      <div>
        <EmployeeForm onSubmitEmployee={SubmitEmployeeHanlder} />
      </div>
      {employees.length > 0 &&
      <div >
        <MyGrid employees={employees}/>           
        </div>
      }
      
    </div>
  );
}

export default App;
