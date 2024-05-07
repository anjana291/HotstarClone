import React from 'react'
import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Kids() {
  return (
    <>
        <div className="ml-32 mt-8">
        <h1 className='text-white text-2xl font-semibold mt-5'>Popular in Kids</h1>

        <div className='grid grid-cols-6 gap-3 mt-5 mb-5'>
             {/* First Movie */}
         <div className='container'>
              <div className='image' >
                <img src="https://m.media-amazon.com/images/M/MV5BYTQ1ZDllZGItM2VkNC00ZWZjLWI5ZWYtOTVjMTk0MDliNzBlXkEyXkFqcGdeQXVyNjkyODEzOTM@._V1_FMjpg_UX1000_.jpg" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/228/1440228-i-79c961d9393b" alt="" className='w-full rounded-xl'/>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3PEmc7DLOTlF2XJirfxtRllethpuaOYG_coZdRC4q2BEDgwU" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5932/1405932-h-80f2f294c1b0" alt="" className='w-full rounded-xl'/>
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
                <img src="https://i0.wp.com/cdn.mylittlemoppet.com/wp-content/uploads/2021/02/18-3.jpg?ssl=1" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8261/1568261-h-986af8b9c2a3" alt="" className='w-full rounded-xl'/>
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
                <img src="https://assets.vogue.in/photos/5e86ebcec0878800092babbe/master/w_1600%2Cc_limit/alice%2520in%2520wonderland%2520disney%2520movie.jpg" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6815/1416815-i-5dbe027ca715" alt="" className='w-full rounded-xl'/>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAUcG6pe02H6LW3YlOegP_PZ7Te5ijAz-ltRgyRC01E8M6fI8TyF27fZRMJ8LJh7jsXY&usqp=CAU" alt="" className='rounded-lg' style={{width:'200px',height:'240px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e" alt="" className='w-full rounded-xl'/>
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
                <img src="https://images-cdn.ubuy.co.in/634d0dc11d9f9a1008324eea-disney-amp-pixar-39-s-onward.jpg" alt="" className='rounded-lg' style={{width:'200px'}}/>
              </div>
              {/* Details Div */}
              <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
                {/* img */}
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1585/1571585-h-8e75f533dcc7" alt="" className='w-full rounded-xl'/>
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

export default Kids