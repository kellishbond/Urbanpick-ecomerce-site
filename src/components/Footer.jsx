import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logoo}className='mb-5 w-32 ' alt="footer" />
        <p className='w-full md:w-2/3 text-gray-600'>
       

Stay Connected

Sign up for our newsletter to receive the latest updates, promotions, and exclusive offers directly to your inbox.
        </p>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>COMPANY</p>
       <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
       </ul>
       
       </div>
       <div>
        <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
       <ul className='flex flex-col gap-1 text-gray-600'>
           <li>+234 8135860783</li>
           <li>Urbanpick@gmail.com</li>
       </ul>
       </div>
       <div>
            <hr />
            <p className='py-5  text-sm '>
            © 2024 Your Store. All Rights Reserved. | Privacy Policy | Terms & Conditions
            </p>
       </div>
        </div>
    </div>
  )
}

export default Footer