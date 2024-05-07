import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import Card from 'react-bootstrap/Card';



function Latest() {
  return (
    <>
     <div className='ml-32 mt-12'>
      <h1 className='text-white text-2xl font-semibold mt-5'>Latest Releases</h1>
      <div className='grid grid-cols-6 gap-3 mt-5 mb-5'>
        {/* First Movie */}
        <div className='container'>
          <div className='image' >
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" alt="" className='rounded-lg' />
            
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1328/1710843191328-h" alt="" className='w-full rounded-xl'/>
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

        {/* Second movie */}
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

        {/* Third movie */}
        <div className='container'>
          <div className='image'>
            <img src="https://image.tmdb.org/t/p/original/pWYMAgP5vkUNIdOxM9AlhO9r2Wy.jpg" alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3156/1710076893156-i" alt="" className='w-full rounded-xl'/>
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
              <h1 className='ml-2'>U/A 16+</h1>
            </div>
            <div>
                <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

        {/* Fourth */}
        <div className='container'>
          <div className='image'>
            <img src="https://preview.redd.it/tiger-2024-matches-dsman124s-disneynature-set-v0-n6rs2o9m3fwc1.png?auto=webp&s=742a0c29b944dda6306d56e0498de503decad8ff" alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/346CE16568CFBF13C9F1803C54670A38B412180465994AC73B82ABC11D837036/scale?width=1200&aspectRatio=1.78&format=webp" alt="" className='w-full rounded-xl'/>
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
              <h1 className='ml-2'>U/A 16+</h1>
            </div>
            <div>
                <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

        {/* Fifth */}
        <div className='container'>
          <div className='image'>
            <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_2993_f80fee96.jpeg" alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://lumiere-a.akamaihd.net/v1/images/image_4d785f42.jpeg?region=0,0,1920,1080" alt="" className='w-full rounded-xl'/>
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
              <h1 className='ml-2'>U/A 16+</h1>
            </div>
            <div>
                <p className='text-slate-400 mt-2 ml-2 mb-2 font-semibold' style={{fontSize:'10px'}}>
                  Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
                </p>
            </div>

          </div>
        </div>

        {/* Sixth */}
        <div className='container'>
          <div className='image'>
            <img src="https://images.justwatch.com/poster/312583310/s276/madu" alt="" className='rounded-lg'/>
          </div>
          {/* Details Div */}
          <div className='details bg-black rounded-xl  mt-8' style={{width:'200px'}}>
            {/* img */}
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0C3E2CDE78ECF482C72C91DC0C77A7BFF9B5CB5CCCED0633804D18843EA70FF/scale?width=1200&aspectRatio=1.78&format=webp" alt="" className='w-full rounded-xl'/>
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
              <h1 className='ml-2'>U/A 16+</h1>
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

export default Latest



{/* <div className='grid grid-cols-6'>

<div className='mt-3'>
    <Card style={{ width: '12rem' }} >
    <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" className='rounded-xl'/>
 
      <div className='w-72 rounded-xl' style={{marginTop:'-250px',marginLeft:'-40px'}}>
          <Card.Body style={{backgroundColor:'red'}}>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1328/1710843191328-h" alt="" className='w-full'/>
            <div className='mt-4'>
                <button className='w-52 h-11 bg-white rounded-xl'>
                <FontAwesomeIcon icon={faPlay} className='mr-3'/><span className='font-bold'>Watch Now</span>
                </button>
                <button className='ml-3 w-14 h-11 bg-slate-500 bg-opacity-50 rounded-xl'>
                <FontAwesomeIcon icon={faPlus} style={{color:'white'}}/>
                </button>
            </div>

        <div className='text-white text-base mt-5 font-bold flex'>
      
          <h1>2024</h1>
          <h1 className='ml-4 opacity-50'>•</h1>
          <h1 className='ml-2'>2h 34min</h1>
          <h1 className='ml-4 opacity-50'>•</h1>
          <h1 className='ml-2'>3 Languages</h1>
        </div>
            <p className='text-slate-400 text-sm mt-2 font-semibold'>
            Veteran cop Abraham Ozler begins to investigate a mysterious unsolved case and the hunt for a serial killer begins.
            </p>
          </Card.Body> 
      </div>
  
</Card> 
</div>

{/* <div className='mt-3'>
    <Card style={{ width: '12rem' }} >
  <Card.Img variant="top" src="https://images.filmibeat.com/img/popcorn/movie_posters/siren-20240123103810-21231.jpg" className='rounded-xl' style={{height:'18rem'}}/>
 
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

<div className='mt-3'>
    <Card style={{ width: '12rem' }} >
  <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" className='rounded-xl'/>
 
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

<div className='mt-3'>
    <Card style={{ width: '12rem' }} >
  <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" className='rounded-xl'/>
 
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

<div className='mt-3'>
    <Card style={{ width: '12rem' }} >
  <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" className='rounded-xl'/>
 
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

<div className='mt-3'>
    <Card style={{ width: '12rem' }} >
  <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/abraham-ozler-et00382570-1704373027.jpg" className='rounded-xl'/>
 
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

</div> */}