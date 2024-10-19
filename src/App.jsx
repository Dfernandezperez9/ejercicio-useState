import './App.css'
import { useState } from 'react'


function App() {
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  const nombres = ['Data', 'Reyes', 'Yolanda'];

  const handleClick = (nombre) => {
    setName(nombre);
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index} onClick={() => handleClick(nombre)}>
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


