import { useState } from "react";


function App() {
  

  

  const [person, setPerson]=useState({
    firstname:'Abdou',
    lastname:'Abdillahi',
    age:3
  })

  

  const increment = () =>{
    setPerson({...person, age: person.age+1})
  }

  return (
    <>
  <p>compteur : {person.age}</p>
  <button onClick={increment}>incremente</button>
    </>
  )
}

export default App
