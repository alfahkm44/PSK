// src/assets/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import ikon mata

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-md shadow-md">
        <h1 className="text-center text-3xl font-bold text-teal-500">
          FINEbank<span className="text-teal-500">.IO</span>
        </h1>

        <h2 className="text-center text-xl font-semibold text-gray-700 mt-4">
          Create an account
        </h2>
    
        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="py-3 ps-4 text-sm border rounded-md w-full bg-gray-100 border-gray-300 focus:border-black focus:outline-none focus:ring-0"
              placeholder="Your Name"
              name="name"
              id="name"
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="py-3 ps-4 text-sm border rounded-md w-full bg-gray-100 border-gray-300 focus:border-black focus:outline-none focus:ring-0"
              placeholder="johndoe@example.com"
              name="email"
              id="email" 
            />
          </div>
    
          <div className="mb-4 relative"> 
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative"> 
              <input
                type={showPassword ? 'text' : 'password'} 
                id="password"
                className="p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="************"
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-3 flex items-center px-2"
                onClick={togglePasswordVisibility}
              >
               {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
          </div>
    
          <div className="flex items-center mb-6">
            <input
              id="agreement"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
            />
            <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
              By continuing, you agree to our terms of service.
            </label>
          </div>
    
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Sign up
          </button>
        </form>
    
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or sign in with</span>
          </div>
        </div>
    
        <div className="mb-8">
          <button
            className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-100 text-gray-900 border border-gray-300"
            type="button"
          >
            <img src="https://www.svgrepo.com/show/496773/google.svg" alt="google-icon" className="h-6 w-6 mr-2"/>
            <span>Continue with Google</span>
          </button>
        </div>
    
        <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-500 font-medium hover:underline">
                Sign in here
            </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;