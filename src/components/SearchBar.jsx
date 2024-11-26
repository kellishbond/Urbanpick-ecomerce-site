import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'



const SearchBar = () => {
     const {search, setSearch,showSearch, SetShowSearch} = useContext(ShopContext)
     const [visible, setVisible] = useState(false)
     const location = useLocation();

     useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }else{
            setVisible(false)
        }

     },[location])

  return showSearch && visible?
  
  (
    <div className='border-t border-b  text-center bg-gray-50'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4  sm:w-1/2  '>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm ' placeholder='search' type="text" />
        <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>SetShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div> 
  ):null
}

export default SearchBar