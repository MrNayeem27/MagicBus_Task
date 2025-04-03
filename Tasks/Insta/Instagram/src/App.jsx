import React from 'react'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

const App = () => {
  const isLog = true;
  return (
    <div>
      {isLog ? <Login /> : <Signup />}
    </div>
  )
}

export default App;