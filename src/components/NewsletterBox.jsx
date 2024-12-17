import React from 'react'

// const NewsletterBox = () => {
//     const onSubmitHandler=(e)=>{

//         e.preventDefault();
//     }
//   return (
//     <div className='text-center'>
//         <p className='text-2xl font-medium text-gray-800' >Subscribe Now and Save 20%!</p>
//     <p className='text-gray-400 mt-3'>
//     Join our exclusive community and enjoy 20% off your next purchase! By subscribing to our newsletter, you'll be the first to know about the latest arrivals, special promotions, 
//     and exclusive deals. Don’t miss out on this limited-time offer to save big on your favorite products.
//     Sign up today and unlock your discount!
//     </p>
//     <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
//         <input className='w-full sm:flex-1 outline-none' type="email"placeholder='Enter your email' required />
//         <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Suscribe</button>
//     </form>
//     </div>
//   )
// }


// Newsletter Component
const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center 
      bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Subscribe Now and Save 20%!
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8 leading-relaxed">
        Join our exclusive community and enjoy 20% off your next purchase! 
        Be the first to know about the latest arrivals and special promotions.
      </p>
      
      <form 
        onSubmit={onSubmitHandler} 
        className="max-w-md mx-auto flex items-center border-2 border-gray-300 
        rounded-full overflow-hidden shadow-sm focus-within:border-gray-500 
        transition-all duration-300"
      >
        <input 
          className="flex-1 px-4 py-3 outline-none text-gray-700 
            placeholder-gray-500 bg-transparent"
          type="email" 
          placeholder="Enter your email" 
          required 
        />
        <button 
          className="bg-gray-900 text-white px-6 py-3 
            hover:bg-gray-800 transition-colors 
            focus:outline-none focus:ring-2 focus:ring-gray-600"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox