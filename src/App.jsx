import './App.css'
import { useRef } from 'react';
import Hero from './components/Hero/Hero'
import { BackgroundBeamsWithCollision } from './components/BackgroundBeamsWithCollision'
import NavBar from './components/Navbar/NavBar'
import Overview from './components/Overview/Overview'
import { MultiStepLoader } from './components/Loder/MultiStepLoader'
import Speakers from './components/Speakers/Speakers'
import Agenda from './components/Agenda/Agenda'
import About from './components/About/About'
import Register from './components/Register/Register'
import Footer from './components/Footer/footer'

function App() {
  const registerRef = useRef(null);

  const handleRegisterClick = () => {
    registerRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    
    <div className='relative overflow-hidden min-h-screen'>

      <div className="absolute inset-0 -z-10 w-full min-h-screen h-full overflow-hidden">
        <BackgroundBeamsWithCollision />
      </div>

      
      <div className='relative h-full'>
        <NavBar onRegisterClick={handleRegisterClick}/>
        <Hero/>
        <div className='bg-black'>
        <Overview/>
        
        <div className='w-screen h-screen items-center flex justify-center'>
        <MultiStepLoader/>
        </div>
        
        </div>
        <div className='bg-gradient-to-bl from-[#343434] to-[#000]'>
          <Speakers/>
        </div>
        <div className='bg-white'>
          <Agenda/>
        </div>
        <div className='bg-black'>
          <About/>
        </div>
        <div>
          <Register registerRef={registerRef}/>
        </div>
        <div className='bg-black'>
          <Footer/>
        </div>
        
       
 
        
        
      </div>
    </div>
    
  )
}

export default App
