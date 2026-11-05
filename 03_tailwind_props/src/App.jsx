import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
let obj={
  para1:"hi alakjdf;asidjufoaisdfpasldkfjpas",
  para2:"hello"
}
  return (
    <div className='flex flex-col  justify-center items-center '>
      <div className='text-3xl p-5 bg-green-500 rounded-xl mb-4'>Hello, World!</div>
      <Card userName='Ram' bntxt="buttom text" obj={obj}/>
      <Card bntxt="buttom text" obj={obj}/>
</div>
  );
}



export default App
