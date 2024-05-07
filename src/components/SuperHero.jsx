import React from 'react'
import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import xmen from '../assets/x-men-97.jpg'
import xmenl from '../assets/xmen-h.webp'
import echo from '../assets/echo.jpg'
import echol from '../assets/echoh.webp'
import marvel from '../assets/marvel.webp'
import marvell from '../assets/marvelh.webp'
import whatif from '../assets/what_if.jpg'

function SuperHero() {
  return (
    <>
    <div className="ml-32 mt-8">
    <h1 className='text-white text-2xl font-semibold mt-5'>Best of Superheroes</h1>

    <div className='grid grid-cols-6 gap-3 mt-5 mb-5'>
         {/* First Movie */}
         <div className='container'>
              <div className='image' >
                <img src={xmen} alt="" className='rounded-lg' style={{width:'200px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src={xmenl} alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>
    
        {/* 2nd Movie */}
        <div className='container'>
              <div className='image' >
                <img src={marvel} alt="" className='rounded-lg' style={{width:'200px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src={marvell} alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>

        {/* 3rd Movie */}
        <div className='container'>
              <div className='image' >
                <img src={echo} alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src={echol} alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>

        {/* 4th Movie */}
        <div className='container'>
              <div className='image' >
                <img src={whatif} alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1424/1041424-h-4887e9c49cf5" alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>

        {/* 5th Movie */}
        <div className='container'>
              <div className='image' >
                <img src="https://w0.peakpx.com/wallpaper/698/723/HD-wallpaper-avengers-endgame-whatever-it-takes-fanposter.jpg" alt="" className='rounded-lg' style={{width:'200px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px',height:'240px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>

        {/* 6th Movie */}
        <div className='container'>
              <div className='image' >
                <img src="https://i.pinimg.com/564x/83/1f/01/831f015888b5a0cd588e89b865ed12d0.jpg" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://variety.com/wp-content/uploads/2022/02/Benedict-Cumberbatch-Doctor-Strange.jpg?w=1000" alt="" className='w-full rounded-xl'/>
                {/* watch button */}
                <div className='mt-4 ml-2'>
                <button className='w-32 h-8 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3' size='xs'/><span className='font-bold text-xs'>Watch Now</span>
                </button>
                <button className='ml-3 w-10 h-8 bg-slate-500 bg-opacity-50 rounded-xl'>
                    <FontAwesomeIcon icon={faPlus} style={{color:'white'}} size='xs'/> 
                </button>
                </div>
                {/* movie details */}
                <div className='text-white mt-3 font-bold flex ml-2' style={{fontSize:'10px'}}>
                  <h1>2024</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>2h 34min</h1>
                  <h1 className='ml-4 opacity-50'>•</h1>
                  <h1 className='ml-2'>3 Languages</h1>
                </div>
                <div>
                    <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                      Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                    </p>
                </div>
    
              </div>
        </div>
    
    </div>
    </div>
    
    </>
  )
}

export default SuperHero