import { useState } from 'react'
import StarRating from './assets/star-rating.component'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <StarRating />
    </>
  )
}

export default App
