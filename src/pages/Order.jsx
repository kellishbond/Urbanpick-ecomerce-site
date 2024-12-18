import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title'
import axios from 'axios'

const Order = () => {
  const {backendUrl, token, currency} =useContext(ShopContext)
  
  const [orderData, setOrderData] = useState([])
 
  const loadOrderData = async ()=>{
    try{
      if(!token){
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers:{token}})
     console.log(response.data)
      
     if (response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)

          })
        })
        
        setOrderData(allOrdersItem.reverse())
        
      }
      
    }catch (error){

    }
    
  }

 useEffect(() => {
   loadOrderData()
 
 }, [token])
 
 return (
  <div className='border-t pt-16'>
    <div className='text-2xl mb-8'>
      <Title text1={'MY'} text2={'ORDER'} />
    </div>

    <div>
      {orderData.map((item, index) => (
        <div 
          key={index} 
          className='py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4'
        >
          <div className='flex flex-col sm:flex-row items-center gap-6 w-full sm:w-1/3'>
            <img 
              className='w-16 sm:w-20 object-cover' 
              src={item.image[0]} 
              alt={item.name} 
            />
            <div className='text-center sm:text-left'>
              <p className='text-base font-medium'>{item.name}</p>
              <div className='flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-2 text-base text-gray-700'>
                <p>{currency}{item.price}</p>
                <span className='h-3 w-px bg-gray-300 hidden sm:block'></span>
                <p>Quantity: {item.quantity}</p>
                <span className='h-3 w-px bg-gray-300 hidden sm:block'></span>
                <p>Size: {item.size}</p>
              </div>
              <div className='mt-2 flex flex-wrap gap-4 text-sm justify-center sm:justify-start'>
                <p>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                <p>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center w-full sm:w-1/3 mt-4 sm:mt-0'>
            <div className='flex items-center gap-2'>
              <span className='min-w-2 h-2 rounded-full bg-green-500'></span>
              <p className='text-sm'>{item.status}</p>
            </div>
          </div>

          <div className='flex items-center justify-center sm:justify-end w-full sm:w-1/3 mt-4 sm:mt-0'>
            <button  onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
              Track Order
            </button>
          </div>
        </div>
      ))}
      <br /><br /><br /><br /><br />
    </div>
  </div>
  
)
}

export default Order