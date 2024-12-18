// import React, { useContext, useEffect, useState } from 'react'
// import  {ShopContext} from '../context/Shopcontext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext )
//   const  [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [Category, setCategory] = useState([]);
//   const [subCategory, setsubCategory] =useState ([])
//   const [sortType, setStoreType] = useState('relevant')

//   const toggleCategory = (e)=>{

//     if (Category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !==e.target.value)
//     )}
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }
//   }

//     const togglesubCategory = (e) => {
//       if (subCategory.includes(e.target.value)) {
//         setsubCategory(prev => prev.filter(item => item !== e.target.value));
//       } else {
//         setsubCategory(prev => [...prev, e.target.value]);
//       }
//     };

// const applyfilter =() =>{
//   let productsCopy = products.slice();
//   if (showSearch && search) {
//     productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//   }

//   if (Category.length > 0) {
//     productsCopy = productsCopy.filter(item => Category.includes(item.category))
//     }

//   if (subCategory.length > 0) {
//     productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))

//   }

//   setFilterProducts(productsCopy)

// }

// const sortProduct = ()=>{

//   let fpCopy = filterProducts.slice();

//   switch(sortType){
//     case 'low-high':
//       setFilterProducts(fpCopy.sort((a, b) => (a.price- b.price)));
//       break;

//     case 'high-low':
//       setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
//       break;

//     default:
//       applyfilter();
//       break
//   }
// }

//   useEffect(()=>{
//     applyfilter();

//   },[Category, subCategory, search, showSearch, products])

//  useEffect(()=>{
//   sortProduct();

//  },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filter options */}
//       <div className='min-w-60'>
//         <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl items-center cursor-pointer gap-2'>Filters
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90 ' : ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//       {/* Category filter */}
//       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'  }`}>
//         <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//         <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//           <p className='flex gap-2'>
//             <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
//           </p>
//           <p className='flex gap-2'>
//             <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
//           </p>
//           <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
//            </p>
//         </div>
//       </div>
//          {/* subCategory fillter */}
//          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'  }`}>
//         <p className='mb-3 text-sm font-medium'>TYPE</p>
//         <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//           <p className='flex gap-2'>
//             <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubCategory}/>Topwear
//           </p>
//           <p className='flex gap-2'>
//             <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubCategory} />Bottomwear
//           </p>
//           <p className='flex gap-2'>
//             <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubCategory} />Winterwear
//           </p>
//         </div>
//       </div>
//       </div>

//           {/* rightside */}
//           <div className='flex-1'>

//             <div className=' flex justify-between text-base sm:text-2xl mb-4'>
//               <Title text1 ={'ALL'} text2 ={'COLLECTIONS'} />
//             {/* PRODUCT SORT */}
//             <select onChange={(e)=>setStoreType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//               <option value="relevant">Sort by: relevant</option>
//               <option value="low-high">Sort by: low to high</option>
//               <option value="high-low">Sort by: high to low</option>
//             </select>
//             </div>

//             {/* map products */}
//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
//               {
//                 filterProducts.map((item, index)=>(
//                   <ProductItem key={index}  name={item.name} id={item._id} price={item.price} image={item.image} />
//                 ))
//               }

//             </div>
//           </div>

//     </div>
//   )
// }

// export default Collection

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/Shopcontext';

// // Placeholder for Title component
// const Title = ({ text1, text2 }) => (
//   <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//     <span className="text-gray-700">{text1}</span>{' '}
//     <span className="text-gray-500">{text2}</span>
//   </h2>
// );

// // Placeholder for ProductItem component
// const ProductItem = ({ name, price, id, image = null }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden
//     transform transition-all duration-300
//     hover:-translate-y-2 hover:shadow-xl
//     group cursor-pointer">
//     <div className="relative">
//       {image ? (
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-48 object-cover
//             group-hover:opacity-75 transition-opacity"
//         />
//       ) : (
//         <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//           <span className="text-gray-500">No Image</span>
//         </div>
//       )}
//       <div className="absolute inset-0 bg-black bg-opacity-0
//         group-hover:bg-opacity-10 transition-all duration-300"></div>
//     </div>
//     <div className="p-4">
//       <h3 className="text-lg font-semibold text-gray-800
//         truncate mb-2">{name}</h3>
//       <div className="flex justify-between items-center">
//         <span className="text-gray-600">${price.toFixed(2)}</span>
//         <button className="opacity-0 group-hover:opacity-100
//           bg-gray-800 text-white px-3 py-1 rounded-full
//           text-sm transition-all duration-300
//           hover:bg-gray-700">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relevant');

//   // Filter and sorting logic (same as original component)
//   const toggleCategory = (e) => {
//     const value = e.target.value;
//     setCategory(prev =>
//       prev.includes(value)
//         ? prev.filter(item => item !== value)
//         : [...prev, value]
//     );
//   };

//   const toggleSubCategory = (e) => {
//     const value = e.target.value;
//     setSubCategory(prev =>
//       prev.includes(value)
//         ? prev.filter(item => item !== value)
//         : [...prev, value]
//     );
//   };

//   const applyFilter = () => {
//     let productsCopy = [...products];

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category)
//       );
//     }

//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         subCategory.includes(item.subCategory)
//       );
//     }

//     setFilterProducts(productsCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = [...filterProducts];

//     switch(sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products]);

//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Filters Section - Mobile Responsive */}
//         <div className="w-full lg:w-64 xl:w-72">
//           <div className="lg:hidden mb-4">
//             <button
//               onClick={() => setShowFilter(!showFilter)}
//               className="w-full flex justify-between items-center
//               bg-gray-100 p-3 rounded-lg text-gray-800
//               hover:bg-gray-200 transition-colors"
//             >
//               <span className="font-semibold">Filters</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`h-5 w-5 transform transition-transform
//                   ${showFilter ? 'rotate-180' : ''}`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>

//           {/* Filter Containers */}
//           <div className={`
//             ${showFilter ? 'block' : 'hidden'}
//             lg:block space-y-6`}
//           >
//             {/* Categories Filter */}
//             <div className="bg-white shadow-md rounded-lg p-5">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Categories
//               </h3>
//               <div className="space-y-2">
//                 {['Men', 'Women', 'Kids'].map(cat => (
//                   <label
//                     key={cat}
//                     className="flex items-center space-x-2
//                     text-gray-700 hover:text-gray-900
//                     transition-colors cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={cat}
//                       onChange={toggleCategory}
//                       className="form-checkbox text-gray-800
//                       focus:ring-gray-500 focus:border-gray-500"
//                     />
//                     <span>{cat}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* SubCategories Filter */}
//             <div className="bg-white shadow-md rounded-lg p-5">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Type
//               </h3>
//               <div className="space-y-2">
//                 {['Topwear', 'Bottomwear', 'Winterwear'].map(subCat => (
//                   <label
//                     key={subCat}
//                     className="flex items-center space-x-2
//                     text-gray-700 hover:text-gray-900
//                     transition-colors cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={subCat}
//                       onChange={toggleSubCategory}
//                       className="form-checkbox text-gray-800
//                       focus:ring-gray-500 focus:border-gray-500"
//                     />
//                     <span>{subCat}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Products Section */}
//         <div className="flex-1">
//           <div className="flex flex-col md:flex-row
//             justify-between items-center mb-8 space-y-4 md:space-y-0">
//             <Title text1="ALL" text2="COLLECTIONS" />

//             {/* Sorting Dropdown */}
//             <select
//               onChange={(e) => setSortType(e.target.value)}
//               className="w-full md:w-auto border-2 border-gray-300
//               rounded-lg px-4 py-2 text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-500
//               focus:border-transparent transition-all"
//             >
//               <option value="relevant">Sort by: Relevant</option>
//               <option value="low-high">Price: Low to High</option>
//               <option value="high-low">Price: High to Low</option>
//             </select>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3
//             lg:grid-cols-4 gap-6">
//             {filterProducts.map((item) => (
//               <ProductItem
//                 key={item._id}
//                 id={item._id}
//                 name={item.name}
//                 price={item.price}
//                 image={item.image}
//               />
//             ))}
//           </div>

//           {/* Empty State */}
//           {filterProducts.length === 0 && (
//             <div className="text-center py-16 bg-gray-50 rounded-lg">
//               <p className="text-xl text-gray-600">
//                 No products found matching your filters.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";

const Title = ({ text1, text2 }) => (
  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
    <span className="block text-gray-700">{text1}</span>
    <span className="block text-gray-500">{text2}</span>
  </h2>
);

const ProductItem = ({ name, price, id, image = null }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="group relative bg-white rounded-2xl shadow-lg 
      overflow-hidden transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-2 
      transform will-change-transform h-full flex flex-col 
      cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full pb-[120%] bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover 
              group-hover:scale-105 transition-transform duration-500 
              ease-in-out"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center 
            bg-gray-200 text-gray-500"
          >
            No Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
        <h3
          className="text-lg font-semibold text-gray-800 
          truncate group-hover:text-blue-600 transition-colors"
        >
          {name}
        </h3>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>

          <button
            
            className="px-4 py-2 bg-gray-800 text-white 
            rounded-full text-sm font-medium 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 
            hover:bg-blue-600 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick= {handleProductClick} >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="container mx-auto px-4 py-10 lg:py-16 max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-full flex justify-between items-center 
            bg-gray-100 px-4 py-3 rounded-lg text-gray-800 
            shadow-md hover:bg-gray-200 transition-colors"
          >
            <span className="text-lg font-semibold">Filter & Sort</span>
            <img
              className={`h-3 transform transition-transform 
                ${showFilter ? "rotate-180" : ""}`}
              src={assets.dropdown_icon}
              alt="dropdown"
            />
          </button>
        </div>

        {/* Filters Section */}
        <div
          className={`
          ${showFilter ? "block" : "hidden"} 
          lg:block w-full lg:w-72 xl:w-80 space-y-8`}
        >
          {/* Categories Filter */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="mb-3 text-sm font-medium text-gray-900">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <p key={cat} className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                  />
                  {cat}
                </p>
              ))}
            </div>
          </div>

          {/* SubCategories Filter */}
          <div className="bg-white rounded-2xl shadow-md p-6 my-5">
            <p className="mb-3 text-sm font-medium text-gray-900">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <p key={subCat} className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={subCat}
                    onChange={toggleSubCategory}
                  />
                  {subCat}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="ALL" text2="COLLECTIONS" />

            {/* PRODUCT SORT */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: relevant</option>
              <option value="low-high">Sort by: low to high</option>
              <option value="high-low">Sort by: high to low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
