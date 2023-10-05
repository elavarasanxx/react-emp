import React, { useState } from 'react';

function Create({ onEmployeeCreate }) {
  const [newEmployee, setNewEmployee] = useState({ name: '', age: '', city: '' });

  const addEmployee = () => {
    if (newEmployee.name.trim() !== '' && newEmployee.age.trim() !== '' && newEmployee.city.trim() !== '') {
      onEmployeeCreate(newEmployee);
      setNewEmployee({ name: '', age: '', city: '' });
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={newEmployee.name}
        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={newEmployee.age}
        onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={newEmployee.city}
        onChange={(e) => setNewEmployee({ ...newEmployee, city: e.target.value })}
      />
      <button onClick={addEmployee}>Add</button>
    </div>
  );
}

export default Create;
