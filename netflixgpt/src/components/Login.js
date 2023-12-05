import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div> 
        
        <Header />
        <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt='logo'
        />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80' >
            <h1 classname='font-bold text-3xl py-4'>Sign In</h1>
            <input type="text" placeholder="Enter Email" className='p-4 my-4 w-full bg-gray-700 rounded' />
            <input type="Password" placeholder="Enter the Password" className='p-4 my-4 w-full bg-gray-700 rounded' />
            <button className='p-4 my-4 bg-red-700 w-full'>Sign In</button>
        </form>
        
    </div>
)
}

export default Login
