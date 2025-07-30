import { Outlet } from 'react-router'
import Navbar from './components/layouts/Navbar'
import FooterComp from './components/layouts/FooterComp'


function App() {


  // 
  return (
    <div className=' bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
      {/* navbar */}
      <nav className='container px-6 py-8'>
          <Navbar/>
      </nav>
        {/* main */}
      <main className='container mx-auto min-h-dvh px-6'>
         <Outlet/>
      </main>
      {/* footer */}
      <FooterComp/>
    </div>
  )
}

export default App