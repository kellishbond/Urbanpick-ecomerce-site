// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'}  text2={'US'}/>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//           <img className='w-full md:max-w-[480px]' src={assets.cont} alt="" />
      
//       <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
//           <p className='text-gray-500'>123 Trendsetter Avenue Style District, <br /> Lagos 101212 Nigeria</p>
//           <p className=' text-gray-500'> Phone Number: +234 812 345 6789 <br />Email: support@urbanpick.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at Urbanpick</p>
//           <p className='text-gray-500'>Learn more about our team and job opeening</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
//       </div>
      
//       </div>
//       <NewsletterBox />
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic
    console.log(formData)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 border-b-2 border-gray-200 pb-6"
        >
          <Title text1={'CONTACT'} text2={'US'} className="text-4xl md:text-5xl font-bold text-gray-800" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Image */}
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src={assets.cont} 
            alt="UrbanPick Contact" 
            className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />

          {/* Contact Information */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="mr-3 text-blue-500" /> Our Store
              </h2>
              <p className="text-gray-600 flex items-center">
                123 Trendsetter Avenue, Style District, Lagos 101212, Nigeria
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="mr-3 text-green-500" /> Contact Information
              </h2>
              <p className="text-gray-600 mb-2">Phone: +234 812 345 6789</p>
              <p className="text-gray-600">Email: support@urbanpick.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Briefcase className="mr-3 text-purple-500" /> Careers
              </h2>
              <p className="text-gray-600 mb-4">
                Passionate about fashion? Join our dynamic team at UrbanPick!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Explore Job Opportunities
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors text-lg font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact