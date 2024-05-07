import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import Card from 'react-bootstrap/Card';

function ContinueWatch() {
  return (
    <>
    <div className='ml-2 sm:ml-28 pl-2'>
      <h1 className='text-white text-2xl font-bold mt-4 mb-5'>Continue Watching for User</h1>
      <div className='grid grid-cols-4 gap-7'>
        <div className='text-white'>
        <div style={{ width: '18rem' }}>
      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/062373F44CE53B5E9F46EDCB877B958A30AAC557947211C32C631B3B16086537/scale?width=1200&aspectRatio=1.78&format=webp" className='rounded-xl'/>
      <div>
        <div className='ml-3'>
          <p className='font-semibold mt-3'>S1 E1</p>
          <p className='opacity-50'>10m left</p>
        </div>
        <p className='mt-5 text-center text-sm font-bold'>
          View More Details <FontAwesomeIcon icon={faAngleRight} />
        </p>
      </div>
    </div>
        </div>
         <div className='text-white'>
        <div style={{ width: '18rem' }}>
      <img variant="top" src="https://deadline.com/wp-content/uploads/2019/11/avatar-scaled-2560.jpg?w=681&h=383&crop=1" className='rounded-xl'/>
      <div>
        <div className='ml-3'>
          <p className='font-semibold mt-3'>Avatar</p>
          <p className='opacity-50'>20m left</p>
        </div>
        <p className='mt-5 text-center text-sm font-bold'>
          View More Details <FontAwesomeIcon icon={faAngleRight} />
        </p>
      </div>
    </div>
        </div>
        <div className='text-white'>
        <div style={{ width: '18rem' }}>
      <img variant="top" src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/821/1650821-i-4a5dae841ed8" className='rounded-xl'/>
      <div>
        <div className='ml-3'>
          <p className='font-semibold mt-3'>Bheeshma</p>
          <p className='opacity-50'>2m left</p>
        </div>
        <p className='mt-5 text-center text-sm font-bold'>
          View More Details <FontAwesomeIcon icon={faAngleRight} />
        </p>
      </div>
    </div>
        </div>
        <div className='text-white'>
        <div style={{ width: '18rem' }}>
      <img variant="top" src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6832/1366832-i-79eaeda503b1" className='rounded-xl'/>
      <div>
        <div className='ml-3'>
          <p className='font-semibold mt-3'>Toy Story 4</p>
          <p className='opacity-50'>21m left</p>
        </div>
        <p className='mt-5 text-center text-sm font-bold'>
          View More Details <FontAwesomeIcon icon={faAngleRight} />
        </p>
      </div>
    </div>
        </div> 
                
      </div>
    </div>
   
    </>
  )
}

export default ContinueWatch