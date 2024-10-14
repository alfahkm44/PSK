import React, { useState } from 'react';
const Label = () => {
  const [showPassword, setShowPassword] = useState(false);
      
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className="mb-6">
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email Address
                    </label>
                    <div className="mb-4 relative"> 
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 relative"> 
                      
                      <button 
                        type="button" 
                        className="absolute inset-y-0 right-3 flex items-center px-2"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 11.961 7.178.097.246.439.906.627 1.279a1.012 1.012 0 01-.588 1.732 8.001 8.001 0 01-8.994 0A1.013 1.013 0 019.678 19.89a8.115 8.115 0 01-2.267-5.571H15.42A1.012 1.012 0 0115 12h-.036c0-.533-.12-.908-.358-1.279A1.014 1.014 0 0113.72 8.862z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.757 0 8.772 2.493 11.774 6.228m-12.667 5.107a1.012 1.012 0 01-.639 0c-.745-.193-1.348-.855-1.54-1.667m15.551-3.793A9.093 9.093 0 0118.75 12m-7.053-4.243A1.012 1.012 0 0112 8m-1.5 5.107A1.012 1.012 0 0110.5 13" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <a href="#" className="absolute top-0 right-0 mt-2 text-xs text-teal-500">
                      Forgot Password?
                    </a> 
                  </div>
                  </div>
  )
}

export default Label
