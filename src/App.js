
import './App.css';

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline bg-red-200">
//       Hello world!
//     </h1>
//   )
// }

// import React from 'react';

// function App(props) {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;


import React,{useState} from "react"

export default function Counter(){
  const [count,setCount]=useState(0) //count is the variable and setCount is the function
  

  const increment=()=>{setCount(count+1)}
  const decrement=()=>{setCount(count-1)}
  const reset=()=>{setCount(0)}
 
  return(
    <div className='mx-auto w-96 my-60'>
    <h1 className='text-16 bg-blue-800 text-slate-300 py-2 text-center w-80 '>COUNTER</h1>
    <div className='flex bg-blue-300 w-80 h-20 items-center justify-center'>
      
      <button onClick={()=>setCount(count+5)}  className='bg-slate-600 text-white rounded-lg px-2 mr-2'>+5</button>
      <button onClick={increment} className='bg-slate-600 text-white rounded-lg px-2'>+</button>
      <p className='px-6 mx-2 rounded-md bg-blue-200'>{count}</p>
      <button onClick={decrement} disabled={count <= 0} className='bg-slate-600 text-white rounded-lg px-2 disabled:bg-gray-300 disabled:text-white'>-</button>
      
      <button onClick={()=>setCount(count-5)} disabled={count < 5} className='bg-slate-600 disabled:bg-gray-300 disabled:text-white text-white rounded-lg px-2 ml-2'>-5</button>

      <div>
      <button className='bg-red-600 disabled:bg-black text-white px-2 ml-2 rounded-lg' onClick={reset} disabled={count === 0}>Reset</button>
      </div>
    </div>
    </div>
  )
}