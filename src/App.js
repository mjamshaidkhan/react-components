import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox'
import { useState } from 'react';


function App() {
  const [checked,setChecked] = useState(false)

  const handleCheck=(value)=>{
      setChecked(value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Checkbox
        onChecked={handleCheck}
        >
   {checked?'Check':'Un Check'}   {checked}
        </Checkbox>
      </header>
    </div>
  );
} 

export default App;
