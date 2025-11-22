import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Auth from './Components/Auth'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import { useLocation } from 'react-router-dom'
import AddMoney from './Components/AddMoney'
import TransactionHistory from './Components/TransactionHistory'
import Balance from './Components/Balance'
import RetrieveMoney from './Components/RetrieveMoney'
import LoanPage from './Components/Loanpage'
import Footer from './Components/Footer'

function App() {

  const location=useLocation()
   const hidenavbar=
                 location.pathname.startsWith("/auth")
  const hidefooter=
                 location.pathname.startsWith("/auth")


  return (
    <>

     {!hidenavbar && <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/addmoney' element={<AddMoney/>}/>
      <Route path='/th' element={<TransactionHistory/>}/>
      <Route path='/balance' element={<Balance/>}/>
      <Route path='/retrieve' element={<RetrieveMoney/>}/>
      <Route path='/loan' element={<LoanPage/>}/>

    </Routes>
      {!hidefooter && <Footer/>}
    </>
  )
}

export default App
