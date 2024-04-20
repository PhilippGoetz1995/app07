import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      key: uuidv4(),
      name: 'Caleb',
      role: 'YouTube Sensation',
      img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
    },
    {
      id: 2,
      key: uuidv4(),
      name: 'Sal',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    },
    {
      id: 3,
      key: uuidv4(),
      name: 'John',
      role: 'Director of Eng.',
      img: 'https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg',
    },
    {
      id: 4,
      key: uuidv4(),
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
    },
    {
      id: 5,
      key: uuidv4(),
      name: 'Corey',
      role: 'The Devops Guy',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: 6,
      key: uuidv4(),
      name: 'Jake',
      role: 'Senior',
      img: 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
    },
  ]);

  console.log(employees[2].key);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function simpleOutput(e) {

    //console.log('simple output' + e);

  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />

          <Employee key={employees[1].key} />

          {/*
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.key}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                  newFunction={simpleOutput}
                />
              );
            })}
          </div>
          */}
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
