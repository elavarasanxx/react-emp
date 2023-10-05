import React, { useState } from 'react';
import './App.css';
import Create from './employee detail/Create';
import Read from './employee detail/Read';
import Update from './employee detail/Update';
import Delete from './employee detail/Delete';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeCreate = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleEmployeeUpdate = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee === selectedEmployee ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const handleEmployeeDelete = (employeeToDelete) => {
    const updatedEmployees = employees.filter((employee) => employee !== employeeToDelete);
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <div className="operation-sections">
        <Create onEmployeeCreate={handleEmployeeCreate} />
        <Read employees={employees}  onEmployeeSelect={setSelectedEmployee} />
        {selectedEmployee && (
          <>
            <Update employee={selectedEmployee} onUpdate={handleEmployeeUpdate} />
            <Delete employee={selectedEmployee} onDelete={handleEmployeeDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
