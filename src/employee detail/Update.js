import React, { useState } from 'react';

function Update({ employee, onUpdate }) {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const updateEmployee = () => {
    if (editedEmployee.name.trim() !== '' && editedEmployee.age.trim() !== '' && editedEmployee.city.trim() !== '') {
      onUpdate(editedEmployee);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={editedEmployee.name}
        onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={editedEmployee.age}
        onChange={(e) => setEditedEmployee({ ...editedEmployee, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={editedEmployee.city}
        onChange={(e) => setEditedEmployee({ ...editedEmployee, city: e.target.value })}
      />
      <button onClick={updateEmployee}>Update</button>
    </div>
  );
}

export default Update;
