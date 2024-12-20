import React from 'react'
import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm ms:text-base text-gray-700 '>
//         <div>
//             <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>Flexible Exchange Policy</p>
//         <p className='text-gray-400'>We want you to be completely satisfied with your purchase. 
//         If you're not happy with your order, you can easily exchange it within 30 days of receiving your items. 
//         Simply contact our customer support team, and we'll guide you through the hassle-free process. 
//         Whether it's the wrong size, color, or simply not what you expected,
//         we’ve got you covered. Items must be in their original condition, unworn, and unused. 
//         Enjoy a smooth and straightforward shopping experience with our Easy Exchange Policy!</p>
//         </div>
//         <div>
//             <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>7 DAYS RETURN POLICY</p>
//         <p className='text-gray-400'>We want you to be fully satisfied with your purchase!
//              If for any reason you're not completely happy with your items, you have 7 days from the date of delivery to return them. 
//              Simply make sure the products are unused, in their original packaging, and with all tags attached.
//              To initiate a return, please contact our customer service team, and we'll guide you through the process. Once we receive your returned items, we'll issue a refund or exchange as per your preference.</p>
//         </div>
//         <div>
//             <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>BEST CUSTOMER SUPPORT</p>
//         <p className='text-gray-400'>
//         At URBANPIC, we are committed to providing the best customer service experience possible. Our dedicated support team is always ready to assist you with any inquiries, concerns, or issues you may have. Whether you need help with product selection, tracking your order, or handling returns, we’re here for you every step of the way.

// We pride ourselves on being responsive, reliable, and friendly. You can reach us via email, phone, or live chat, and we'll ensure that you get the assistance you need in a timely manner.

// Your satisfaction is our priority, and we’re here to make your shopping experience smooth and hassle-free.
//         </p>
//         </div>
//     </div>
//   )
// }

const OurPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 
      grid grid-cols-1 sm:grid-cols-3 gap-8 
      bg-gray-50 text-center">
      {[
        {
          icon: assets.exchange_icon,
          title: "Flexible Exchange Policy",
          description: "We want you to be completely satisfied with your purchase..."
        },
        {
          icon: assets.quality_icon,
          title: "7 Days Return Policy",
          description: "We want you to be fully satisfied with your purchase..."
        },
        {
          icon: assets.support_img,
          title: "Best Customer Support",
          description: "At URBANPIC, we are committed to providing the best customer service..."
        }
      ].map((policy, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center p-6 
          bg-white rounded-lg shadow-md 
          hover:shadow-xl transition-all duration-300 
          transform hover:-translate-y-2"
        >
          <img 
            src={policy.icon} 
            className="w-16 h-16 mb-4 object-contain" 
            alt={policy.title} 
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {policy.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {policy.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy