
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches, setWatches]=useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])
  
  return (
    <div>
      {
        watches.map(watch =><Watch key={watch.id} Watch={watch}></Watch>)
      }
    </div>
  )
}

export default App
