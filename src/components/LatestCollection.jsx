import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
     const [lastestProduct, setlastestProduct] = useState([]);

     useEffect(()=>{
            setlastestProduct(products.slice(0,10));
     }, [])

  return (
    <div className='my-10'>
      <div className='text-center  py-8 text-3xl'>
            <Title text1={'LASTEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our newest arrivals, carefully curated to bring you the freshest trends and styles. From bold statement pieces to everyday essentials, our Latest Collections feature the must-have items for every season. Be the first to explore the latest designs and elevate your wardrobe with unique pieces that stand out.

Stay ahead of the trends and shop the newest additions today!


            </p>
        </div>  

     {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                lastestProduct.map((item,index)=>(
                    <ProductItem key ={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection