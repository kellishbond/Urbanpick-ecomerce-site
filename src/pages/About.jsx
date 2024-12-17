// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div>
//     <div className='text-2xl text-center pt-8 border-t'> 
//     <Title text1={'ABOUT'} text2={'US'} />

//     </div>
//     <div className='my-10 flex flex-col md:flex-row gap-16'>
//       <img className='w-full md:max-w-[450px]' src={assets.abb} alt="" />
//     <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//         <p>Welcome to UrbanPick, where style meets inclusivity!
//         We are a clothing line designed for everyone – from the fashion-forward adult to the playful child. At UrbanPick, we believe in celebrating individuality through versatile and trend-savvy fashion that fits every occasion and personality.</p>
//         <p>Our mission is to offer quality, comfort, and timeless designs that reflect your unique style. Whether you're shopping for yourself, your kids, or your entire family, UrbanPick has something special for everyone.
//           Explore our collection today and experience a seamless shopping journey that’s all about you!</p>
//             <b className='text-gray-800'>OUR MISSION</b>
//           <p>At UrbanPick, our mission is to empower individuals and families with high-quality, stylish clothing that celebrates diversity, inclusivity, and self-expression.
//             We are dedicated to delivering premium, durable fabrics that combine comfort with style, designing clothing for all ages, genders, and sizes because everyone deserves to look and feel their best. Our focus is on making fashion accessible without compromising on excellence while committing to eco-friendly practices for a better future.
//             UrbanPick is more than a clothing line – it’s a movement to inspire confidence and bring people together through fashion.</p>
   
   
//     </div>
//     </div>

//     <div className='text-4xl py-4'>
//       <Title text1={'WHY'}  text2={'CHOOSE US'} />
//     </div>
//     <div className='flex flex-col md:flex-row text-sm mb-20'>
//       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
//        <b>Quality Assurance:</b>
//         <p className='text-gray-600'>At UrbanPick, we use only premium materials to craft stylish, durable clothing that stands the test of time. Our attention to detail ensures every piece meets the highest standards of excellence.</p>
//       </div>
      
//       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
//        <b>Convenience:</b>
//         <p className='text-gray-600'>Shopping with us is effortless. From a user-friendly website to fast, reliable delivery, we make sure your experience is smooth and hassle-free.</p>
//       </div>
//       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
//        <b>Exceptional Customer Service:</b>
//         <p className='text-gray-600'>We’re here for you every step of the way, offering personalized support and prompt assistance to ensure your satisfaction and confidence in every purchase.</p>
//       </div>
      

//     </div>

    
//     <NewsletterBox />
//     </div>
    
//   )
// }

// export default About

import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
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
          <Title text1={'ABOUT'} text2={'US'} className="text-4xl md:text-5xl font-bold text-gray-800" />
        </motion.div>

        {/* Brand Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src={assets.abb} 
            alt="UrbanPick Brand" 
            className="w-full md:w-1/2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2 space-y-6 text-gray-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="leading-relaxed">
              Welcome to UrbanPick, a fashion revolution that celebrates individuality and inclusivity. We're more than a clothing line – we're a movement dedicated to empowering people through style.
            </p>
            <p className="leading-relaxed">
              Our journey began with a simple belief: fashion should be accessible, comfortable, and a true expression of personal identity. From trendy adults to playful children, we craft clothing that speaks to every unique personality.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white shadow-md rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Mission</h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At UrbanPick, we're committed to delivering premium, sustainable fashion that celebrates diversity. Our mission is to create clothing that empowers individuals, transcends boundaries, and inspires confidence across all ages, genders, and sizes.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Quality Assurance",
              description: "Meticulously crafted with premium materials, our garments promise durability, comfort, and timeless style.",
              icon: "✨"
            },
            {
              title: "Seamless Experience",
              description: "Enjoy a frictionless shopping journey with our intuitive website and swift, reliable delivery.",
              icon: "🚀"
            },
            {
              title: "Customer First",
              description: "Our dedicated support team ensures personalized assistance and complete satisfaction with every interaction.",
              icon: "❤️"
            }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <NewsletterBox />
      </div>
    </div>
  )
}

export default About