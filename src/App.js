import './index.css';
import Employee from './components/Employee.js';

import { useState } from 'react';

//Importing uuid to have uniqe ids for emplyoees
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Create a new state that can be changed
  const [role, setRole] = useState('developer');

  const [employees, setEmployees] = useState([
    {
      name: 'Caleb',
      role: 'YouTube Sensation',
      img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
    },
    {
      name: 'Sal',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    },
    {
      name: 'John',
      role: 'Director of Eng.',
      img: 'https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg',
    },
    {
      name: 'Melanie',
      role: 'Software Engineer',
      img: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
    },
    {
      name: 'Corey',
      role: 'The Devops Guy',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      name: 'Jake',
      role: 'Senior',
      img: 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
    }
  ]);

  return (

    <div className="App">

      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
        id="first"
      />

      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {

          console.log(uuidv4());

          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />
          );
        })}

      </div>

    </div>
  );
}

export default App;
