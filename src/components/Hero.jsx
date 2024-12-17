
// import React from 'react';
// import { assets } from '../assets/assets';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row border border-grey-400">
//       {/* Hero left side */}
//       <div
//         className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 
//         animate-slide-in-left"
//       >
//         <div className="text-[#414141]">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
//           </div>
//           <h1 className="prata-regular text-3xl sm:py3 lg:text-5xl leading-relaxed">
//             New Additions
//           </h1>
//           <div className="flex items-center gap-2">
//             <p className="font-semibold text-sm md:text-base">Order Now!</p>
//             <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>
//       {/* Hero right side */}
//       <img
//         className="w-full sm:w-1/2 animate-slide-in-right"
//         src={assets.heropic}
//         alt=""
//       />
//     </div>
//   );
// };

// export default Hero;


// Hero Component
import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 shadow-md rounded-lg overflow-hidden">
      {/* Hero left side */}
      <div 
        className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-16 px-6 
        bg-gradient-to-r from-gray-50 to-white 
        transition-all duration-500 ease-in-out 
        hover:shadow-inner"
      >
        <div className="text-gray-800 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-gray-600 opacity-70"></span>
            <p className="font-medium text-sm uppercase tracking-wider text-gray-600">Our Bestsellers</p>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-wide">
            New Additions
          </h1>
          <div className="flex items-center gap-3 group cursor-pointer">
            <p className="font-semibold text-base text-gray-700 
              group-hover:text-gray-900 transition-colors">
              Order Now
            </p>
            <span className="w-10 h-0.5 bg-gray-600 
              group-hover:bg-gray-900 transition-colors"></span>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        className="w-full sm:w-1/2 object-cover 
        transform transition-transform duration-500 
        hover:scale-105"
        src={assets.heropic} 
        alt="New Collection Showcase"
      />
    </div>
  );
};

export default Hero;