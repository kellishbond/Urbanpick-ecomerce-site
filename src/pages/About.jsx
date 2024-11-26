import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'> 
    <Title text1={'ABOUT'} text2={'US'} />

    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.abb} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to UrbanPick, where style meets inclusivity!
        We are a clothing line designed for everyone – from the fashion-forward adult to the playful child. At UrbanPick, we believe in celebrating individuality through versatile and trend-savvy fashion that fits every occasion and personality.</p>
        <p>Our mission is to offer quality, comfort, and timeless designs that reflect your unique style. Whether you're shopping for yourself, your kids, or your entire family, UrbanPick has something special for everyone.
          Explore our collection today and experience a seamless shopping journey that’s all about you!</p>
            <b className='text-gray-800'>OUR MISSION</b>
          <p>At UrbanPick, our mission is to empower individuals and families with high-quality, stylish clothing that celebrates diversity, inclusivity, and self-expression.
            We are dedicated to delivering premium, durable fabrics that combine comfort with style, designing clothing for all ages, genders, and sizes because everyone deserves to look and feel their best. Our focus is on making fashion accessible without compromising on excellence while committing to eco-friendly practices for a better future.
            UrbanPick is more than a clothing line – it’s a movement to inspire confidence and bring people together through fashion.</p>
   
   
    </div>
    </div>

    <div className='text-4xl py-4'>
      <Title text1={'WHY'}  text2={'CHOOSE US'} />
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
       <b>Quality Assurance:</b>
        <p className='text-gray-600'>At UrbanPick, we use only premium materials to craft stylish, durable clothing that stands the test of time. Our attention to detail ensures every piece meets the highest standards of excellence.</p>
      </div>
      
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
       <b>Convenience:</b>
        <p className='text-gray-600'>Shopping with us is effortless. From a user-friendly website to fast, reliable delivery, we make sure your experience is smooth and hassle-free.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
       <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>We’re here for you every step of the way, offering personalized support and prompt assistance to ensure your satisfaction and confidence in every purchase.</p>
      </div>
      

    </div>

    
    <NewsletterBox />
    </div>
    
  )
}

export default About