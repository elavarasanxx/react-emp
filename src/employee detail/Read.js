import React from 'react';

function Read({ employees, onEmployeeSelect }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name}, {employee.age} years old, from {employee.city}
            <button onClick={() => onEmployeeSelect(employee)}>Update</button>
            <button onClick={() => onEmployeeSelect(employee)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
