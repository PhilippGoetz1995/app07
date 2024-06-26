import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');

  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      key: 1,
      name: 'Caleb',
      role: 'YouTube Sensation',
      img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
    },
    {
      id: uuidv4(),
      key: 2,
      name: 'Sal',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    },
    {
      id: uuidv4(),
      key: 3,
      name: 'John',
      role: 'Director of Eng.',
      img: 'https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg',
    },
    {
      id: uuidv4(),
      key: 4,
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
    },
    {
      id: uuidv4(),
      key: 5,
      name: 'Corey',
      role: 'The Devops Guy',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: uuidv4(),
      key: 6,
      name: 'Jake',
      role: 'Senior',
      img: 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
    }
  ]);

  function updateEmployee(id, newName, newRole) {


    const updatedEmployees = employees.map((employee) => {

      //Get the data from the EditEmployee component and create an new array with updated employees

      if (id == employee.id) {

        //to not pass all parameter again to the object the employee object will be unpacked by the "..."
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
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
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
