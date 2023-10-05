import React from 'react';

function Delete({ employee, onDelete }) {
  return (
    <div>
      <h2>Delete Employee</h2>
      <p>
        Are you sure you want to delete {employee.name}, {employee.age} years old, from {employee.city}?
      </p>
      <button onClick={() => onDelete(employee)}>Delete</button>
    </div>
  );
}

export default Delete;
