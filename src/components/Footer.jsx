import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='ml-32 mt-20 mb-10'>
        <div className='grid grid-cols-4 cursor-pointer'>
            <div className='text-white'>
                 <h4 className='text-base font-semibold'>Company</h4>
                 <div className='text-sm mt-6 text-slate-400'>
                     <p>About Us</p>
                     <p className='mt-3'>Careers</p>
                 </div>
            </div>
            <div className='text-white ml-14'>
                <h4 className='text-sm font-semibold'>View Website in</h4>
                 <p className='text-sm mt-6 text-slate-400'>✓ English</p>
            </div>
            <div className='text-white ml-24'>
                <h4 className='text-sm font-semibold'>Need Help?</h4>
                 <div className='text-sm mt-6 text-slate-400'>
                     <p>Visit Help Center</p>
                     <p className='mt-3'>Share Feedback</p>
                 </div>
            </div>
            <div className='text-white ml-36'>
                <h4 className='text-sm font-semibold'>Connect with Us</h4>
                <div className='mt-5 ml-4'>
                    <FontAwesomeIcon icon={faFacebookF} size='lg'/>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='ml-8'/>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2'>
            <div className='text-slate-400 mt-9 text-xs'>
                <p>© 2024 ASTAR. All Rights Reserved</p>
                <p className='mt-3'><span>Terms of Use</span>  <span className='ml-3'>Privacy Policy</span>  <span className='ml-3'>FAQ</span></p>
            </div>
            <div className='flex mt-9 ml-64'>
                <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="" className='w-36'/>
                <img src="https://www.pngkey.com/png/full/527-5270084_html-code-allows-you-to-embed-logo-appstore.png" alt="" className='w-36 ml-3' />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer