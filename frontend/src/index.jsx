import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'
import SendMoney from './components/SendMoney'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sendmoney' element={<SendMoney/>}/>
      </Routes>
    </Router>
  )
}

export default App
