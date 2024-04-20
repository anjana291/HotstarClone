import React from 'react'
import Card from 'react-bootstrap/Card';

function Latest() {
  return (
    <>
     <div className='ml-32 mt-12'>
      <h1 className='text-white text-2xl font-semibold mt-5'>Latest Releases</h1>
        <div className='grid grid-cols-6'>
        <div className='mt-3'>
            <Card style={{ width: '12rem' }} >
          <Card.Img variant="top" src="https://www.thenextplanet1.pics/Media/Media/Bollywood/Bollywood20_25/ABRAHAM_OZLER_WEB-DL2024_poster_HKuX8G0_DCdE38R_kyUyUJn_9_h6SsoJz.jpg" className='rounded-md'/>
         
              <div>
                  <Card.Body >
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body> 
              </div>
          
        </Card>
        </div>
        </div>
    </div>   
    </>
  )
}

export default Latest