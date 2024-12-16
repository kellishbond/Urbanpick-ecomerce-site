// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/Shopcontext'
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState]=useState('Login')
//   const {token, setToken, navigate, backendUrl} = useContext(ShopContext);
  
  
//   const [name, setName]= useState('')
//   const [password, setPassword]= useState('')
//   const [email, setEmail]= useState('')

  
  
//   const onSubmitHandler = async (event)=>{
//       event.preventDefault();
//       try {
//         if (currentState === 'Sign up') {
//           const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
//           if(response.data.success){
//             setToken(response.data.token)
//             localStorage.setItem('token', response.data.token)

//           }else{
//             toast.error(response.data.message)
//           }
          

//         }else{

//           const response = await axios.post(backendUrl + '/api/user/login', {email, password})
//           if(response.data.success){
//               setToken(response.data.token)
//               localStorage.setItem('token', response.data.token)
//           }
//           else{
//             toast.error(response.data.message)
          
//         }
//       }

        
//       } catch (error) {
//         console.log(error);
//         toast.error(response.message)
        
        
//       }
//  }
 
// useEffect(()=>{
//   if (token) {
//     navigate('/')
    
//   }

// },[token, navigate])


//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//         <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//           <p className='prata-regular text-3xl'>{currentState}</p>
//       <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

//         </div>
//        {currentState === 'Login' ? '' :  <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' type="text" required />} 
//         <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' type="email"required />
//         <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' type="password"  required/>
//         <div className='w-full flex justify-between text-sm mt-[-8px] '>
//             <p className='cursor-pointer'>Forgot your password?</p>
//         {
//           currentState === 'Login'
//           ? <p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer'>Create an account </p>
//           : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
//         }
//         </div>
//         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In': 'Sign up'}</button>
//     </form>
//   )
// }

// export default Login


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const endpoint = currentState === 'Sign up' ? '/api/user/register' : '/api/user/login';
      const payload = currentState === 'Sign up' ? { name, email, password } : { email, password };

      const response = await axios.post(new URL(endpoint, backendUrl), payload);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? null : (
        <label className='w-full'>
          <span className='sr-only'>Name</span>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Name'
            type='text'
            required
          />
        </label>
      )}
      <label className='w-full'>
        <span className='sr-only'>Email</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Email'
          type='email'
          required
        />
      </label>
      <label className='w-full'>
        <span className='sr-only'>Password</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Password'
          type='password'
          required
        />
      </label>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>
            Create an account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
            Login here
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4' disabled={loading}>
        {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In' : 'Sign up'}
      </button>
    </form>
  );
};

export default Login;
