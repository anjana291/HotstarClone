import { faPlay,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Home() {
  return (
    <>
        <div className='ml-24 h-screen bg-cover bg-center bg-no-repeat grid grid-cols-2' style={{backgroundImage: "linear-gradient(30deg,rgba(0,0,0,7),rgba(0,0,0,0.1)),url('https://english.idreampost.com/wp-content/uploads/2024/02/Malyalam-movie-premalu-10-days-collections.jpg')",backgroundAttachment:'fixed'}}>          
          <div>
            <img src="./src/assets/premalu.png" alt="" className='mt-28' style={{height:'200px'}}/>
            <div className='text-white font-bold ml-16 flex'>
              
                <h1>2024</h1>
                <h1 className='ml-4 opacity-50'>•</h1>
                <h1 className='ml-2'>2h 34min</h1>
                <h1 className='ml-4 opacity-50'>•</h1>
                <h1 className='ml-2'>3 Languages</h1>
                <h1 className='ml-4 opacity-50'>•</h1>
                <div className='ml-2 w-20 h-6 bg-slate-50 opacity-60 rounded'>
                <h1 className='text-black font-bolder ml-2'>U/A 13+</h1>
                </div>
            </div>
            <h1 className='text-white ml-16 mt-4'>Sachin pursues romance but finds himself caught between</h1>
            <h1 className='text-white ml-16 mt-1'>two potential partners, leading to amusing complications.</h1>

            <div className='text-white font-bold ml-16 flex mt-4'>
              <h1>Romance</h1>
              <h1 className='ml-2'>|</h1>
              <h1 className='ml-2'>Comedy</h1>
              <h1 className='ml-2'>|</h1>
              <h1 className='ml-2'>Bromance</h1>
              <h1 className='ml-2'>|</h1>
              <h1 className='ml-2'>Love Triangle</h1>
            </div>

            <div className='mainlang ml-14 mt-5 flex'>
              <div className='w-14 h-7 rounded-md'>
                <h1 className='text-white font-bold pl-2'>Tamil</h1>
              </div>
              <div className='w-14 h-7 rounded-md'>
                <h1 className='text-white font-bold pl-2'>Hindi</h1>
              </div>
              <div className='w-44 h-7 ml-2 rounded-xl bg-slate-500 bg-opacity-50'>
                <h1 className='text-white font-bold pl-2 ml-2'>Malayalam <span className='text-slate-500'>Original</span></h1>
              </div>
            </div>

            <div className='ml-16 mt-4'>
              <button className='w-96 h-11 bg-slate-500 bg-opacity-50 rounded-xl'>
              <FontAwesomeIcon icon={faPlay} style={{color:'white'}} className='mr-3'/><span className='text-white font-bold'>Watch Now</span>
              </button>
              <button className='ml-3 w-14 h-11 bg-slate-500 bg-opacity-50 rounded-xl'>
              <FontAwesomeIcon icon={faPlus} style={{color:'white'}}/>
              </button>
            </div>

          </div>
          <div>

          </div>
        </div>
    </>
  )
}

export default Home