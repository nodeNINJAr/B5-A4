import { Outlet } from 'react-router'
import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <>
       {/* navbar */}
        <nav className='container px-6 py-8'>
           <Navbar/>
        </nav>
        {/* main */}
      <main className='container mx-auto'>
         <Outlet/>
      </main>
    </>
  )
}

export default App