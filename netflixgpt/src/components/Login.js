import React from 'react'
import { useState ,useRef} from 'react';
import Header from './Header'
import {checkValidData} from "../utils/validate"
import {  createUserWithEmailAndPassword ,
    signInWithEmailAndPassword} 
    from "firebase/auth";
import {auth} from "../utils/firebase"


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] =useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () => {
        //Validate the form data 
        // checkValidData(email,password)
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm){
            //SignUp
createUserWithEmailAndPassword(
    auth, 
    email.current.value,
    password.current.value
    )
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + "-" + errorMessage);
  });

        } else {
                // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }; 
  return (
    <div> 
        
        <Header />
        <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt='logo'
        />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80' >
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>



        {!isSignInForm && (
            <input
            ref={name}
            type="text"
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700'
            />
        )}




            <input 
            ref = {email}
            type="text" 
            placeholder="Enter Email" 
            className='p-4 my-4 w-full bg-gray-700 rounded' 
            />



            <input 
            ref = {password}
            type="Password" 
            placeholder="Enter the Password" 
            className='p-4 my-4 w-full bg-gray-700 rounded' 
            />

<p className='text-red-500 font-bold text-lg py-2 '> {errorMessage}</p>
            <button 
            className='p-4 my-4 bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now ": "  Already Registered? Sign In Now." }
            </p> 
        </form>
        
    </div>
)
}

export default Login
