import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let counter=1;
  let [counter, setcounter]=useState(0);

  const addvalue=(num)=>{
    setcounter(counter+num);
  }



  return (
    <>
    <h3>This is a code for counting score</h3>
  
    <h2>Your current score is {counter}</h2>
    
    <button 
    onClick={()=>addvalue(1)}
    >One Run</button>
    
    <button 
    onClick={()=>addvalue(2)}
    >Doubles</button>
    
    <button 
    onClick={()=>addvalue(3)}
    >Three Runs</button>
    
    <button 
    onClick={()=>addvalue(4)}
    >Four..!!</button>
    
    <button 
    onClick={()=>addvalue(6)}
    >SIX..!!</button>
    
    
    
    </>
    
  )
}

export default App
