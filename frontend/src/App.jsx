import React from 'react'
import Header from './components/Header'
<<<<<<< HEAD
=======
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
>>>>>>> 64b2f296f5413f5c88b2eba2d4ec2bf8888aa3fc

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Header />
=======
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
>>>>>>> 64b2f296f5413f5c88b2eba2d4ec2bf8888aa3fc
    </div>
  )
}

export default App