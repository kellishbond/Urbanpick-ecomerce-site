import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(e)=>{

        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800' >Subscribe Now and Save 20%!</p>
    <p className='text-gray-400 mt-3'>
    Join our exclusive community and enjoy 20% off your next purchase! By subscribing to our newsletter, you'll be the first to know about the latest arrivals, special promotions, 
    and exclusive deals. Don’t miss out on this limited-time offer to save big on your favorite products.
    Sign up today and unlock your discount!
    </p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
        <input className='w-full sm:flex-1 outline-none' type="email"placeholder='Enter your email' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Suscribe</button>
    </form>
    </div>
  )
}

export default NewsletterBox