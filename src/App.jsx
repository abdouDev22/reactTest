import { useState } from "react";


function App() {
  

  const [count,setCout]= useState(0);

  const increment = () =>{
    setCout(count+1)
    setCout((c)=>c+1)
    setCout((c)=>c+1)
  }

  return (
    <>
  <p>compteur : {count}</p>
  <button onClick={increment}>incremente</button>
    </>
  )
}

export default App
