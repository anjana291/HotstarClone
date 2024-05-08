import React from 'react'
import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import oneimg from '../assets/ONE.png'
import twoimg from '../assets/2.png'
import threeimg from '../assets/threep.png'
import four from '../assets/fourp.png'
import five from '../assets/fivep.png'
import six  from '../assets/sixp.png'

function Topten() {
  return (
    <>
    <div className='ml-32 mt-8'>
    <h1 className='text-white text-2xl font-semibold mt-5'>Top Ten in India Today</h1>
    <div className='grid grid-cols-6 gap-7 mt-5 mb-5'>
      {/* First Movie */}
      <div className='container'>
          <div className='image' >
            <img src="https://reviewpuram.in/wp-content/uploads/2024/02/Manjummel-Boys-Poster.jpg" alt="" className='rounded-lg' />
            <img src={oneimg} alt="" style={{width:'100px',marginTop:'-85px',marginLeft:'-55px'}}/>
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
            <img src="https://images.justwatch.com/poster/310338233/s718/12th-fail.jpg" alt="" className='rounded-lg' />
            <img src={twoimg} alt="" style={{width:'100px',marginTop:'-76px',marginLeft:'-45px'}}/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://images.mid-day.com/images/images/2024/jan/vikrant12th_d.jpg" alt="" className='w-full rounded-xl'/>
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
            <img src="https://m.media-amazon.com/images/M/MV5BOGI3MTQ5MDUtNGJhMi00NDY1LWE2MDItODRlMGNkMWVmY2MwXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg" alt="" className='rounded-lg' />
            <img src={threeimg} alt="" style={{width:'100px',marginTop:'-85px',marginLeft:'-45px'}}/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9916/1579916-i-dd4151b86404" alt="" className='w-full rounded-xl'/>
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
            <img src="https://assets.gadgets360cdn.com/pricee/assets/product/202404/Lootere_1712210445.jpg" alt="" className='rounded-lg' />
            <img src={four} alt="" style={{width:'100px',marginTop:'-68px',marginLeft:'-45px'}}/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8240/1711021558240-h" alt="" className='w-full rounded-xl'/>
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
            <img src="https://m.media-amazon.com/images/M/MV5BOWJkZDY1OWYtNTg0MC00OWU2LWJiMzMtNmM0NTlkNDEzOTIyXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg" alt="" className='rounded-lg' />
            <img src={five} alt="" style={{width:'100px',marginTop:'-80px',marginLeft:'-45px'}}/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6054/1626054-h-c6489c60975e" alt="" className='w-full rounded-xl'/>
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
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/premalu-tamil-et00391009-1710506570.jpg" alt="" className='rounded-lg' />
            <img src={six} alt="" style={{width:'100px',marginTop:'-80px',marginLeft:'-45px'}}/>
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

export default Topten