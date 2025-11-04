import React from 'react'

const App = () => {
// main localStorage command
  //localstorage.setitem
  //localstorage.getitem
  //removeItem
  //clear
  
  //for array
  const user = {
    username: "sharthak",
    age:69
  }
  localStorage.setItem('user', JSON.stringify(user))

  console.log(user);
  
  return (
    <div>App</div>
  )
}

export default App