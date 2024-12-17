import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

// const Bestsellers = () => {
//     const { products } = useContext(ShopContext);
//     const [bestseller, setBestseller] = useState([]);
//     useEffect(()=>{
//         const bestproduct = products.filter((item)=>(item.bestseller))
//         setBestseller(bestproduct.slice(0,5))
//     },[products])


//   return (
//     <div className='my-10'>
//         <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLERS'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Explore our most popular products, handpicked by our customers for their exceptional quality and style. Our Bestsellers collection features top-rated items that have consistently impressed shoppers and are always in high demand. Whether you're looking for timeless classics or the latest trends, you're sure to find something you’ll love.

// Shop these favorites today and experience what everyone is raving about!
//         </p>
//         </div>
        
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//     {
//         bestseller.map((item, index) => (
//             <ProductItem 
//                 key={index} // Use _id as the key
//                 id={item._id} 
//                 name={item.name} 
//                 image={item.image} 
//                 price={item.price} 
//             />
//         ))
//     }
// </div>

//     </div>
//   )
// }
// Bestsellers Component
const Bestsellers = () => {
    const { products } = useContext(ShopContext);
    const [bestsellers, setBestsellers] = useState([]);
  
    useEffect(() => {
      const bestProducts = products.filter((item) => item.bestseller);
      setBestsellers(bestProducts.slice(0, 5));
    }, [products]);
  
    return (
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="text-center mb-10">
          <Title text1="BEST" text2="SELLERS" />
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
            Explore our most popular products, handpicked by our customers for their 
            exceptional quality and style.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          gap-6 gap-y-8 
          transition-all duration-300">
          {bestsellers.map((item) => (
            <ProductItem 
              key={item._id} 
              id={item._id} 
              name={item.name} 
              image={item.image} 
              price={item.price}
              className="transform hover:scale-105 transition-transform duration-300 
                hover:shadow-lg rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };

export default Bestsellers