import './App.css'
import ContinueWatch from './components/ContinueWatch'
import Footer from './components/Footer'
import Home from './components/Home'
import Kids from './components/Kids'
import Latest from './components/Latest'
import Navbar from './components/Navbar'
import NewMovies from './components/NewMovies'
import Sports from './components/Sports'
import SuperHero from './components/SuperHero'
import Topten from './components/Topten'


function App() {
  

  return (
    <>
     <Navbar/>
     <Home/>
     <ContinueWatch/>
     <Latest/>
     <Sports/>
     <Topten/>
     <NewMovies/>
     <SuperHero/>
     <Kids/>
     <Footer/>
    </>
  )
}

export default App
