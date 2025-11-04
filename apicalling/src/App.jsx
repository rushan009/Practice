import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const getData =async ()=>{
    const respnse = await axios.get('https://picsum.photos/v2/list')
    console.log(respnse.data);
    
    setData(respnse.data)
  }




  return (
    <div>
      <button onClick={getData}>button</button>
      <div>
        {data.map(()=>{
          return(
            <h3>hello</h3>
          )
        })}
      </div>
    </div>
  )
}

export default App