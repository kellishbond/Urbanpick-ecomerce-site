import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'}  text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.cont} alt="" />
      
      <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p className='text-gray-500'>123 Trendsetter Avenue Style District, <br /> Lagos 101212 Nigeria</p>
          <p className=' text-gray-500'> Phone Number: +234 812 345 6789 <br />Email: support@urbanpick.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Urbanpick</p>
          <p className='text-gray-500'>Learn more about our team and job opeening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
      </div>
      
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact