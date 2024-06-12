import React from 'react'
import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loverL from '../assets/loverR.webp'
import loverH from '../assets/Lover.webp'
import salaarH from '../assets/salaar.jpg'
import salaarL from '../assets/salaarL.avif'
import hanumanH from '../assets/hanuman-H.avif'
import hanumanL from '../assets/hanumanL.webp'
import manjummel from '../assets/manjummel.jpg'

function NewMovies() {
  return (
    <>
        <div className='ml-32 mt-8'>
            <h1 className='text-white text-2xl font-semibold mt-5'>New Movies</h1>

            <div className='grid grid-cols-6 gap-3 mt-5 mb-5'>
                {/* First Movie */}
                <div className='container'>
          <div className='image' >
            <img src={manjummel} alt="" className='rounded-lg' />
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://images.filmibeat.com/img/1200x675/popcorn/movie_lists/manjummel-boys-ott-release-platform-cast-story--trailer-20240222113913-1680.jpg" alt="" className='w-full rounded-xl'/>
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
            <img src={loverL} alt="" className='rounded-lg' />
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src={loverH} alt="" className='w-full rounded-xl'/>
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

                {/* 3rd movie */}
        <div className='container'>
          <div className='image'>
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/siren-et00384518-1707388385.jpg" alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://imgeng.jagran.com/images/2024/feb/siren1708141953657.jpg" alt="" className='w-full rounded-xl'/>
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
                <p className='text-slate-400 mt-2 mb-2 ml-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

        {/* 4th movie */}
        <div className='container'>
          <div className='image'>
            <img src={salaarH} alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src={salaarL} alt="" className='w-full rounded-xl'/>
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
                <p className='text-slate-400 mt-2 mb-2 ml-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

        {/* 5th movie */}
        <div className='container'>
          <div className='image'>
            <img src={hanumanH} alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src={hanumanL} alt="" className='w-full rounded-xl'/>
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
                <p className='text-slate-400 mt-2 mb-2 ml-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

         {/* 6th Movie */}
      <div className='container'>
          <div className='image' >
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/premalu-tamil-et00391009-1710506570.jpg" alt="" className='rounded-lg' />
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i" alt="" className='w-full rounded-xl'/>
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

export default NewMovies