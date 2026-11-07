import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")
  const colors={
    white:"bg-white",
    red:"bg-red-500",
    blue:"bg-blue-500",
    green:"bg-green-500",
    olive:"bg-olive-500",
    gray:"bg-gray-500",
    yellow:"bg-yellow-500",
    pink:"bg-pink-500",
    purple:"bg-purple-500",
    black:"bg-black"
  }
  function onChange(newColor){
    setColor(newColor)
  }
  return (
    <>
    <div className={`${colors[color]} h-screen flex items-center justify-center`}>
      <div className='flex   bg-amber-100 rounded-3xl justify-around ml-3 mr-3 p-5'>
        <button className='bg-red-500 rounded-3xl p-5' onClick={()=>onChange("red")}>Red</button>
        <button className='bg-white rounded-3xl p-5' onClick={()=>onChange("white")}>white</button>
        <button className='bg-blue-500 rounded-3xl p-5' onClick={()=>onChange("blue")}>blue</button>
        <button className='bg-green-500 rounded-3xl p-5' onClick={()=>onChange("green")}>green</button>
        <button  className='bg-olive-500 rounded-3xl p-5'onClick={()=>onChange("olive")}>olive</button>
        <button className='bg-gray-500 rounded-3xl p-5' onClick={()=>onChange("gray")}>gray</button>
        <button className='bg-yellow-500 rounded-3xl p-5' onClick={()=>onChange("yellow")}>yellow</button>
        <button className='bg-pink-500 rounded-3xl p-5' onClick={()=>onChange("pink")}>pink</button>
        <button className='bg-purple-500 rounded-3xl p-5' onClick={()=>onChange("purple")}>purple</button>
        <button className='bg-black rounded-3xl p-5 text-white' onClick={()=>onChange("black")}>black</button>
      </div>
    </div>
    
    </>
  )
}

export default App
