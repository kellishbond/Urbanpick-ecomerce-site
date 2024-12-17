// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//         <div>
//             <img src={assets.logoo}className='mb-5 w-32 ' alt="footer" />
//         <p className='w-full md:w-2/3 text-gray-600'>
       

// Stay Connected

// Sign up for our newsletter to receive the latest updates, promotions, and exclusive offers directly to your inbox.
//         </p>
//         </div>
//         <div>
//             <p className='text-x1 font-medium mb-5'>COMPANY</p>
//        <ul className='flex flex-col gap-1 text-gray-600'>
//             <li>HOME</li>
//             <li>ABOUT US</li>
//             <li>DELIVERY</li>
//             <li>PRIVACY POLICY</li>
//        </ul>
       
//        </div>
//        <div>
//         <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
//        <ul className='flex flex-col gap-1 text-gray-600'>
//            <li>+234 8135860783</li>
//            <li>Urbanpick@gmail.com</li>
//        </ul>
//        </div>
//        <div>
//             <hr />
//             <p className='py-5  text-sm '>
//             © 2024 Your Store. All Rights Reserved. | Privacy Policy | Terms & Conditions
//             </p>
//        </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react'
import { assets } from '../assets/assets'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Facebook, url: '#' }
  ]

  const companyLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Delivery', url: '/delivery' },
    { name: 'Privacy Policy', url: '/privacy' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <img 
              src={assets.logoo} 
              alt="UrbanPick Logo" 
              className="w-40 mb-4 filter brightness-0 invert" 
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay Connected. Sign up for our newsletter to receive the latest updates, 
              promotions, and exclusive offers directly to your inbox.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ translateX: 10 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <a href={link.url}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3" size={20} />
                +234 8135860783
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="mr-3" size={20} />
                Urbanpick@gmail.com
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="mr-3" size={20} />
                Lagos, Nigeria
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">NEWSLETTER</h3>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm"
        >
          © 2024 UrbanPick. All Rights Reserved. | 
          <a href="#" className="ml-2 hover:text-white">Privacy Policy</a> | 
          <a href="#" className="ml-2 hover:text-white">Terms & Conditions</a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
