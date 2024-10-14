import React, { useState } from 'react';
const Input = () => {
    const [showPassword, setShowPassword] = useState(false);
      
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }
  return (
    <input
        type="email"
        className="py-3 ps-4 text-sm border rounded-md w-full bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-0" 
        placeholder="hello@example.com"
        name="email"
        id="email"
    />
    <input
        type={showPassword ? 'text' : 'password'} 
        id="password"
        className="p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
        placeholder="************"
    />
  )
}

export default Input
