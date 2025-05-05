import React, { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  const increase = () => count >= 10 ? alert('Counter canot be greater than 10') : setcount(count+1)
  const decrease = () => count > 0 ? setcount(count - 1) : alert('Counter cannot go below zero')
  const reset = ()=> setcount(0)

  return (
 <>
    <div className='container'>
      <div className='main'>
        <button onClick={increase} className='btn'>+</button>
        <p>Counter:<span></span>{count}</p>
        <button onClick={decrease}
        className='btn'>-</button>
      </div>
    </div>
    <button onClick={reset} className='btn'>Reset</button>
 </>

  )
}

export default App