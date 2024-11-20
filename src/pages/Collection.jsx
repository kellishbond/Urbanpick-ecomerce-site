import React, { useContext, useEffect, useState } from 'react'
import  {ShopContext} from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext )
  const  [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subCategory, setsubCategory] =useState ([])
  const [sortType, setStoreType] = useState('relevant')
  
  const toggleCategory = (e)=>{

    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !==e.target.value)
    )}
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
 
 

    const togglesubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
        setsubCategory(prev => prev.filter(item => item !== e.target.value));
      } else {
        setsubCategory(prev => [...prev, e.target.value]);
      }
    };
    

const applyfilter =() =>{
  let productsCopy = products.slice();

  if (Category.length > 0) {
    productsCopy = productsCopy.filter(item => Category.includes(item.category))
    }
    
  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))

  }

  setFilterProducts(productsCopy)

}

const sortProduct = ()=>{

  let fpCopy = filterProducts.slice();

  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a, b) => (a.price- b.price)));
      break;

    case 'high-low':
      setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
      break;
    
    default:
      applyfilter();
      break
  }
}
 
  useEffect(()=>{
    applyfilter();

  },[Category, subCategory])

 useEffect(()=>{
  sortProduct();

 },[sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'> 
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90 ' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
      {/* Category filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'  }`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
           </p>
        </div>
      </div>
         {/* subCategory fillter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'  }`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubCategory}/>Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubCategory} />Bottomwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubCategory} />Winterwear
          </p>
        </div>
      </div>
      </div>

          {/* rightside */}
          <div className='flex-1'>

            <div className=' flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1 ={'ALL'} text2 ={'COLLECTIONS'} />
            {/* PRODUCT SORT */}
            <select onChange={(e)=>setStoreType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: relevant</option>
              <option value="low-high">Sort by: low to high</option>
              <option value="high-low">Sort by: high to low</option>
            </select>
            </div>

            {/* map products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
              {
                filterProducts.map((item, index)=>(
                  <ProductItem key={index}  name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
              }


            </div>
          </div>

    </div>
  ) 
}

export default Collection