import { Outlet } from 'react-router'
import Navbar from './components/layouts/Navbar'
import FooterComp from './components/layouts/FooterComp'
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import type { RootState } from './redux/store';
import Alert from './components/modules/alert/Alert';
import { hideAlert } from './redux/features/alertSlice';


function App() {

  const { message, type, visible } = useAppSelector((state: RootState) => state.alert);
  const dispatch = useAppDispatch();



  // 
  return (
   <>
     {visible && (
        <Alert
          message={message}
          type={type}
          onClose={() => dispatch(hideAlert())}
        />
      )}

      {/*  */}
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
   </>
  )
}

export default App