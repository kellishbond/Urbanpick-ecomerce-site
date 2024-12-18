// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/Shopcontext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const {productId} = useParams();
//   const {products, currency, addToCart}  = useContext(ShopContext)
//   const [productData, setProductData] = useState(false)
//   const [image, setImage] = useState (' ')
//   const [size, setSize] = useState('')


//   const fetchProductData = async ()=>{
//       products.map((item)=>{
//         if (item._id === productId) {
//           setProductData(item)
//           setImage(item.image[0])
          
//           return null;
//         }

//       })
//   }

//   useEffect(()=>{
//     fetchProductData();
//   },[productId, products])

//   return productData? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
//      {/* product data */}
//       <div className='flex gap-12 sm:gap12 flex-col sm:flex-row'>
//         {/* product images */}
//           <div className='flex-1  flex flex-col-reverse gap-3 sm:flex-row'>
//             <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//                 {
//                   productData.image.map((item, index)=>(
//                     <img onClick={()=>setImage(item)} src={item} key={index} className='w-[ 24%] sm:w-full sm:mb-3  flex-shrink-0 cursor-pointer '  />
//                   ))
//                 }
//             </div>
//             <div className='w-full sm:w-[80%]'>
//               <img className='w-full h-auto' src={image} alt="" />

//             </div>
//           </div>
//   {/* ----------------product info----------------- */}
//           <div className='flex-1'>
               
//                 <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//                 <div className='flex items-center gap-1 mt-2'>
//                     <img className='w-3 5' src={assets.star_icon} alt="" />
//                     <img className='w-3 5' src={assets.star_icon} alt="" />
//                     <img className='w-3 5' src={assets.star_icon} alt="" />
//                     <img className='w-3 5' src={assets.star_icon} alt="" />
//                     <img className='w-3 5' src={assets.star_dull_icon} alt="" />
//                     <p className='pl-2'>(122)</p>
//                 </div>
//                 <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//                 <p className='mt-5 text-gray-500 w-4/5  '>{productData.description}</p>
//                 <div className='flex flex-col gap-4 my-8 '>
//                     <p>Select Size</p>
//                     <div className='flex gap-2' >
//                     {productData.sizes.map((item, index)=>(
//                       <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 ': '' }`} key={index}>{item}</button>
//                     ))}
//                     </div>
//                   </div>

//                   <button onClick={()=>addToCart(productData._id, size)} className=' bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//                     <p>100% original product.</p>
//                     <p>Cash on delivery is available on this product</p>
//                     <p> easy return and exchange policy withing 7 days</p>
//           </div>
//           </div>
//       </div>
//       {/* --------------Description and Review section */}
    
//       <div className='mt-20'>
//         <div className='flex'>
//             <b className='border px-5 py-3 text-sm '>
//               Description
//               </b>
//             <p  className='border px-5 py-3 text-sm '>
//                 Reviews
//             </p>   
//         </div>
//         <div className='flex flex-col gap-4 border px-6 py-6 text-gray-500 text-sm'>
//                     <p>an e-commerce site typically display products or services along with details</p>
//                     <p>E -commerce site that is awesome </p>
//         </div>
//       </div>

//       {/* Display Related proucts  */}
     
//       <RelatedProducts category ={productData.category} subCategory={productData.subCategory}  />


//     </div>  ): <div className='opacity-0'></div>
// }

// export default Product

// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/Shopcontext';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const {productId} = useParams();
//   const {products, currency, addToCart}  = useContext(ShopContext)
//   const [productData, setProductData] = useState(false)
//   const [image, setImage] = useState(' ')
//   const [size, setSize] = useState('')

//   const fetchProductData = async ()=>{
//       products.map((item)=>{
//         if (item._id === productId) {
//           setProductData(item)
//           setImage(item.image[0])
          
//           return null;
//         }
//       })
//   }

//   useEffect(()=>{
//     fetchProductData();
//   },[productId, products])

//   return productData? (
//     <div className='container mx-auto px-4 py-8 
//       transition-opacity ease-in duration-500 
//       bg-gray-50 min-h-screen'>
//       {/* Product Main Section */}
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-12 
//         bg-white shadow-lg rounded-xl overflow-hidden 
//         border border-gray-100 p-6 md:p-10'>
//         {/* Product Image Gallery */}
//         <div className='space-y-6'>
//           {/* Main Image */}
//           <div className='w-full bg-gray-100 rounded-lg overflow-hidden 
//             shadow-md transform transition-transform hover:scale-105'>
//             <img 
//               className='w-full h-[500px] object-cover' 
//               src={image} 
//               alt={productData.name} 
//             />
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className='flex space-x-4 overflow-x-auto pb-4'>
//             {productData.image.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => setImage(item)}
//                 className={`
//                   w-20 h-20 flex-shrink-0 cursor-pointer 
//                   rounded-lg overflow-hidden 
//                   transition-all duration-300
//                   ${image === item 
//                     ? 'border-2 border-gray-800 scale-105' 
//                     : 'border-2 border-transparent hover:border-gray-300'
//                   }
//                 `}
//               >
//                 <img 
//                   src={item} 
//                   alt={`Thumbnail ${index + 1}`} 
//                   className='w-full h-full object-cover'
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Information */}
//         <div className='space-y-6'>
//           <div>
//             <h1 className='text-3xl font-bold text-gray-900 mb-4'>
//               {productData.name}
//             </h1>

//             {/* Rating */}
//             <div className='flex items-center mb-4'>
//               <div className='flex space-x-1 text-yellow-500 mr-2'>
//                 {[...Array(4)].map((_, i) => (
//                   <svg 
//                     key={i} 
//                     xmlns="http://www.w3.org/2000/svg" 
//                     className='h-5 w-5' 
//                     viewBox="0 0 24 24" 
//                     fill="currentColor"
//                   >
//                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
//                   </svg>
//                 ))}
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   className='h-5 w-5 text-gray-300' 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor"
//                 >
//                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
//                 </svg>
//               </div>
//               <span className='text-gray-600 text-sm'>(122 Reviews)</span>
//             </div>

//             {/* Price */}
//             <div className='text-4xl font-bold text-gray-900 mb-6'>
//               {currency}{productData.price}
//             </div>

//             {/* Description */}
//             <p className='text-gray-600 mb-6 leading-relaxed'>
//               {productData.description}
//             </p>
//           </div>

//           {/* Size Selection */}
//           <div className='mb-6'>
//             <h3 className='text-lg font-semibold text-gray-800 mb-4'>
//               Select Size
//             </h3>
//             <div className='flex space-x-3'>
//               {productData.sizes.map((item, index) => (
//                 <button 
//                   key={index}
//                   onClick={() => setSize(item)}
//                   className={`
//                     px-4 py-2 rounded-lg 
//                     transition-all duration-300
//                     ${size === item 
//                       ? 'bg-gray-900 text-white' 
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
//                   `}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart */}
//           <button 
//             onClick={() => addToCart(productData._id, size)}
//             className='
//               w-full py-4 rounded-lg 
//               bg-gray-900 text-white 
//               hover:bg-gray-800 
//               transition-colors duration-300 
//               flex items-center justify-center 
//               space-x-2 font-semibold
//               focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50
//             '
//           >
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className='h-6 w-6' 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//             <span>Add to Cart</span>
//           </button>

//           {/* Product Guarantees */}
//           <div className='bg-gray-100 rounded-lg p-4 text-sm text-gray-600 space-y-2'>
//             <div className='flex items-center space-x-2'>
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className='h-5 w-5 text-green-500' 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
//               </svg>
//               <span>100% Original Product</span>
//             </div>
//             <div className='flex items-center space-x-2'>
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className='h-5 w-5 text-blue-500' 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor"
//               >
//                 <path d="M11.25 4.5l7.5 3v6.75a9 9 0 01-7.5 8.25 9 9 0 01-7.5-8.25V7.5l7.5-3z" />
//               </svg>
//               <span>Cash on Delivery Available</span>
//             </div>
//             <div className='flex items-center space-x-2'>
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className='h-5 w-5 text-purple-500' 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25L17.25 12a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5H6.75a.75.75 0 010-1.5h4.5V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
//               </svg>
//               <span>Easy 7-Day Return Policy</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Description and Reviews Section */}
//       <div className='mt-12 bg-white shadow-md rounded-lg overflow-hidden'>
//         <div className='flex border-b'>
//           <button className='px-6 py-4 font-semibold text-gray-900 border-b-2 border-gray-900'>
//             Description
//           </button>
//           <button className='px-6 py-4 text-gray-600 hover:bg-gray-100'>
//             Reviews
//           </button>
//         </div>
//         <div className='p-6 text-gray-600'>
//           <p className='mb-4'>An e-commerce site typically displays products or services along with details.</p>
//           <p>E-commerce site that is awesome</p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className='mt-16'>
//         <RelatedProducts 
//           category={productData.category} 
//           subCategory={productData.subCategory} 
//         />
//       </div>
//     </div>
//   ) : <div className='opacity-0'></div>
// }

// export default Product


import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';
import { toast } from 'react-toastify';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart}  = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState(' ')
  const [size, setSize] = useState('')

  const fetchProductData = async ()=>{
      products.map((item)=>{
        if (item._id === productId) {
          setProductData(item)
          setImage(item.image[0])
          
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  // New function to handle add to cart with toast
  const handleAddToCart = () => {
    // Check if size is selected
    if (!size) {
      // Immediately show error toast
      toast.error('Please select a size before adding to cart', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
  
    // Immediately show success toast before adding to cart
    toast.success(`item added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  
    // Add to cart
    addToCart(productData._id, size);
  }

  return productData? (
    <div className='container mx-auto px-4 py-8 
      transition-opacity ease-in duration-500 
      bg-gray-50 min-h-screen'>
      {/* Product Main Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 
        bg-white shadow-lg rounded-xl overflow-hidden 
        border border-gray-100 p-6 md:p-10'>
        {/* Product Image Gallery */}
        <div className='space-y-6'>
          {/* Main Image */}
          <div className='w-full bg-gray-100 rounded-lg overflow-hidden 
            shadow-md transform transition-transform hover:scale-105'>
            <img 
              className='w-full h-[500px] object-cover' 
              src={image} 
              alt={productData.name} 
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className='flex space-x-4 overflow-x-auto pb-4'>
            {productData.image.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setImage(item)}
                className={`
                  w-20 h-20 flex-shrink-0 cursor-pointer 
                  rounded-lg overflow-hidden 
                  transition-all duration-300
                  ${image === item 
                    ? 'border-2 border-gray-800 scale-105' 
                    : 'border-2 border-transparent hover:border-gray-300'
                  }
                `}
              >
                <img 
                  src={item} 
                  alt={`Thumbnail ${index + 1}`} 
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              {productData.name}
            </h1>

            {/* Rating */}
            <div className='flex items-center mb-4'>
              <div className='flex space-x-1 text-yellow-500 mr-2'>
                {[...Array(4)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className='h-5 w-5' 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className='h-5 w-5 text-gray-300' 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <span className='text-gray-600 text-sm'>(122 Reviews)</span>
            </div>

            {/* Price */}
            <div className='text-4xl font-bold text-gray-900 mb-6'>
              {currency}{productData.price}
            </div>

            {/* Description */}
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {productData.description}
            </p>
          </div>

          {/* Size Selection */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              Select Size
            </h3>
            <div className='flex space-x-3'>
              {productData.sizes.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setSize(item)}
                  className={`
                    px-4 py-2 rounded-lg 
                    transition-all duration-300
                    ${size === item 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className='
              w-full py-4 rounded-lg 
              bg-gray-900 text-white 
              hover:bg-gray-800 
              transition-colors duration-300 
              flex items-center justify-center 
              space-x-2 font-semibold
              focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50
            '
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className='h-6 w-6' 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Add to Cart</span>
          </button>

          {/* Product Guarantees */}
          <div className='bg-gray-100 rounded-lg p-4 text-sm text-gray-600 space-y-2'>
            <div className='flex items-center space-x-2'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className='h-5 w-5 text-green-500' 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span>100% Original Product</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className='h-5 w-5 text-blue-500' 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M11.25 4.5l7.5 3v6.75a9 9 0 01-7.5 8.25 9 9 0 01-7.5-8.25V7.5l7.5-3z" />
              </svg>
              <span>Cash on Delivery Available</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className='h-5 w-5 text-purple-500' 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25L17.25 12a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5H6.75a.75.75 0 010-1.5h4.5V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
              <span>Easy 7-Day Return Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Reviews Section */}
      <div className='mt-12 bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='flex border-b'>
          <button className='px-6 py-4 font-semibold text-gray-900 border-b-2 border-gray-900'>
            Description
          </button>
          <button className='px-6 py-4 text-gray-600 hover:bg-gray-100'>
            Reviews
          </button>
        </div>
        <div className='p-6 text-gray-600'>
          <p className='mb-4'>An e-commerce site typically displays products or services along with details.</p>
          <p>E-commerce site that is awesome</p>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-16'>
        <RelatedProducts 
          category={productData.category} 
          subCategory={productData.subCategory} 
        />
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product