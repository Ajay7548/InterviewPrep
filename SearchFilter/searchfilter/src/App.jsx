import React, { useEffect, useState } from 'react'


const items =[
  "Apple","Mango","Banana","Grapes","Orange","Cocunut","Pie","Cake","Potatato"
]

const App = () => {
  const [search,setSearch] = useState('')
  const [debounceSearch,setDebounceSearch] = useState('')

  //debounceLogic
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setDebounceSearch(search)
    },400)

    return ()=>clearTimeout(timeoutId)

  },[search])

    //searchfilter logic
    const filterItems = items.filter((item)=>
      // item.toLowerCase().includes(search.toLowerCase()) )

    //debounce serach
    item.toLowerCase().includes(debounceSearch.toLowerCase()) )

  return (
    <div>
      <input type="text"
      placeholder='Search Item'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

    <ul>
      {
        filterItems.map((item)=>(
        <li>{item}</li>
        ))
      }
    </ul>
    </div>
  )
}

export default App