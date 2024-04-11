
import './App.css';
import TimerComponent from './TimerComponent';
import {useState} from 'react';


function App() {
  let[toggle,setToggle]=useState(true)
  return (
    <div className="App">
      {toggle ? <TimerComponent /> : null}
      <button onClick={() => setToggle(!toggle)}>Rest</button>
    </div>
  );
}

export default App;
