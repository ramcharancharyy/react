import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    if (count<20){

      setCount(count+1)
    }
  }
  const subValue=()=>{
    if (count>0){

      setCount(count-1)
    }
  }
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={subValue}>Sub</button>
      
    </>
  )
}

export default App
