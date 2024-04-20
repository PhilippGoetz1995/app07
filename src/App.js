import './index.css';
import Employee from './components/Employee.js';

import { useState } from 'react';

function App() {

  const showEmployees = false;

  //Create a new state that can be changed
  const [role, setRole] = useState('developer');

  return (

    <div className="App">

      <input 
        type="text" 
        onChange={(e) =>{
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      />
       
      {console.log('test')}
      {showEmployees ? <p>show this</p> : <p>or show this</p>}

        <Employee />

        <Employee name={role} />

    </div>
  );
}

export default App;
