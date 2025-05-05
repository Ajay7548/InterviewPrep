import React from 'react'
import SearchboxDebounce1 from './SearchboxDebounce1'
import DebounceFormValidation from './DebounceFormValidation'

const App = () => {

  return (
    <div className='bg-gray-950 h-screen w-full sticky text-white flex flex-col gap-4 justify-center items-center overflow-auto p-4'>
      {/* <h1 className='text-2xl font-semibold'>Indian University Search</h1> */}
      {/* <SearchboxDebounce1/> */}

      <h1 className='text-2xl font-semibold'>Form Validtaion Debounce</h1>
      <DebounceFormValidation/>
    </div>
  )
}

export default App