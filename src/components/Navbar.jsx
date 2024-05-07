import { faCircleUser, faMagnifyingGlass, faHouse, faTv,faClapperboard, faBasketball,faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='grid grid-cols-2 bg-black h-screen w-28 fixed cursor-pointer'>
        <div>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/09/disney-india-reliance.jpg" alt="" className='ml-5 mt-5'/>
            <FontAwesomeIcon icon={faCircleUser} size='lg' style={{color:'white'}} className='ml-9 mt-12'/> 
            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' style={{color:'white'}} className='ml-9 mt-10'/> 
            <FontAwesomeIcon icon={faHouse} size='lg' style={{color:'white'}} className='ml-9 mt-10'/>
            <FontAwesomeIcon icon={faTv} size='lg' style={{color:'white'}} className='ml-9 mt-10'/>
            <FontAwesomeIcon icon={faClapperboard} size='lg' style={{color:'white'}} className='ml-9 mt-10'/>
            <FontAwesomeIcon icon={faBasketball} size='lg' style={{color:'white'}} className='ml-9 mt-10'/>
            <FontAwesomeIcon icon={faLayerGroup} size='lg' style={{color:'white'}} className='ml-9 mt-10'/>
        </div>
    <div className='ml-1 w-24 bg-black text-slate-500 font-bold opacity-0 hover:opacity-100'>
        <h4 className='mt-24 ml-2 hover:text-white'>My Space</h4>
        <h4 className='mt-9 ml-2 hover:text-white'>Search</h4>
        <h4 className='mt-10 ml-2 hover:text-white'>Home</h4>
        <h4 className='mt-9 ml-2 hover:text-white'>TV</h4>
        <h4 className='mt-9 ml-2 hover:text-white'>Movies</h4>
        <h4 className='mt-9 ml-2 hover:text-white'>Sports</h4>
        <h4 className='mt-9 ml-2 hover:text-white'>Categories</h4>
    </div>
    </div>
    </>
  )
}

export default Navbar