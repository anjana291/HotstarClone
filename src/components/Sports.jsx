import React from 'react'

function Sports() {
  return (
    <>
    <div className='ml-32 mt-8'>
    <h1 className='text-white text-2xl font-semibold mt-5'>Best in Sports</h1>
    <div className='grid grid-cols-4 gap-1 mt-5'>
        
        {/* First card */}
        <div className='sportdiv text-white relative hover:scale-125'>
            <img src="https://img.naidunia.com/naidunia/ndnimg/06052024/06_05_2024-delhi_capitals_vs_rajasthan_royals_1.jpg" alt="" className='rounded-lg' style={{width:'17rem'}}/>
            <h1 className='sporth font-semibold mt-3 text-center text-lg'>DC vs RR: All You Need To Know</h1>
            <p className='sportp text-slate-400 ml-6 mb-2 hidden' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa ducimus voluptatum ad sint</p>
        </div>
                   
        {/* 2nd card */}
        <div className='sportdiv text-white relative hover:scale-125'>
            <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5745/1715020185745-i" alt="" className='rounded-lg' style={{width:'17rem'}}/>
            <h1 className='sporth font-semibold mt-3 text-center text-lg'>Wankhede Rises to a SKY Special</h1>
            <p className='sportp text-slate-400 ml-6 ml-2 mb-2 hidden' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa ducimus voluptatum ad sint</p>
        </div>

        {/* 3rd card */}
        <div className='sportdiv text-white relative hover:scale-125'>
            <img src="https://e0.365dm.com/24/05/768x432/skysports-crystal-palace-manchester-united_6545766.jpg?20240506213911" alt="" className='rounded-lg' style={{width:'17rem'}}/>
            <h1 className='sporth font-semibold mt-3 text-center text-lg'>Crystal Palace 4-0 Man United</h1>
            <p className='sportp text-slate-400 ml-6 ml-2 mb-2 hidden' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa ducimus voluptatum ad sint</p>
        </div>

        {/* 4th card */}
        <div className='sportdiv text-white relative hover:scale-125'>
            <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/2565/1714936702565-i" alt="" className='rounded-lg' style={{width:'17rem'}}/>
            <h1 className='sporth font-semibold mt-3 text-center text-lg'>MSD Achieves Special Milestone</h1>
            <p className='sportp text-slate-400 ml-6 ml-2 mb-2 hidden' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa ducimus voluptatum ad sint</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Sports