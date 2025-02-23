import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import FloatingButton from './components/Floating'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingButton />
      <Header/>
      <main className='flex-grow'> 
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App