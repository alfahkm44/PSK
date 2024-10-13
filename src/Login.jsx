import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import ikon mata

function Login() {
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

        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="py-3 ps-4 text-sm border rounded-md w-full bg-gray-100 border-gray-300 focus:border-black focus:outline-none focus:ring-0"
              placeholder="johndoe@email.com"
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
            <a href="#" className="absolute top-0 right-0 mt-2 text-xs text-teal-500">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center mb-6">
            <input
              id="status"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
            />
            <label htmlFor="status" className="ml-2 text-sm text-gray-600">
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Login
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
          Don't have an account?{' '}
          <Link to="/signup" className="text-teal-500 font-medium hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import login from './Signup';
// import { FaEye } from "react-icons/fa";

// const App = () => {
//   // State untuk mengelola visibilitas password
//   const [showPassword, setShowPassword] = useState(false);

//   // Fungsi untuk mengubah tipe input dan ikon tombol
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center min-h-screen items-center bg-gray-100">
//       {/* Container */}
//       <div className="w-full max-w-sm bg-white p-8 rounded-md shadow-md">
//         {/* Logo */}
//         <h1 className="text-center text-3xl font-bold text-teal-500">
//           FINEbank<span className="text-teal-500">.IO</span>
//         </h1>


//         {/* Form */}
//         <form className="mt-8">
//           {/* Email */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
//               placeholder="johndoe@gmail.com"
//               name="email"
//               id="email" // Menampilkan nilai default di input
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative"> 
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1 relative"> 
//               <input
//                 type={showPassword ? 'text' : 'password'} 
//                 id="password"
//                 className="p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="************"
//               />
//               {/* Tombol Mata */}
//               <button 
//                 type="button" 
//                 className="absolute inset-y-0 right-3 flex items-center px-2"
//                 onClick={togglePasswordVisibility}
//               >
//                 {/* Ikon Mata
//                 {showPassword ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 11.961 7.178.097.246.439.906.627 1.279a1.012 1.012 0 01-.588 1.732 8.001 8.001 0 01-8.994 0A1.013 1.013 0 019.678 19.89a8.115 8.115 0 01-2.267-5.571H15.42A1.012 1.012 0 0115 12h-.036c0-.533-.12-.908-.358-1.279A1.014 1.014 0 0113.72 8.862z" />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.757 0 8.772 2.493 11.774 6.228m-12.667 5.107a1.012 1.012 0 01-.639 0c-.745-.193-1.348-.855-1.54-1.667m15.551-3.793A9.093 9.093 0 0118.75 12m-7.053-4.243A1.012 1.012 0 0112 8m-1.5 5.107A1.012 1.012 0 0110.5 13" />
//                   </svg>
//                 )} */}
//               </button>
//             </div>
//             {/* Forgot Password */}
//             <a href="#" className="absolute top-0 right-0 mt-2 text-xs text-teal-500">
//               Forgot Password?
//             </a> 
//           </div>

//           {/* Keep me signed in */}
//           <div className="flex items-center mb-6">
//             <input
//               id="status"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
//             />
//             <label htmlFor="status" className="ml-2 text-sm text-gray-600">
//               Keep me signed in
//             </label>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-2 px-4 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="relative my-6">
//           <div className="absolute inset-0 flex items-center" aria-hidden="true">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="bg-white px-2 text-gray-500">or sign in with</span>
//           </div>
//         </div>

//         {/* Google Sign-In */}
//         <div className="mb-8">
//           <button
//             className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
//             type="button"
//           >
//             <svg
//               class="h-6 w-6 mr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="800px"
//               height="800px"
//               viewBox="-0.5 0 48 48"
//               version="1.1"
//             >
//               {" "}
//               <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
//               <defs> </defs>{" "}
//               <g
//                 id="Icons"
//                 stroke="none"
//                 stroke-width="1"
//                 fill="none"
//                 fill-rule="evenodd"
//               >
//                 {" "}
//                 <g id="Color-" transform="translate(-401.000000, -860.000000)">
//                   {" "}
//                   <g id="Google" transform="translate(401.000000, 860.000000)">
//                     {" "}
//                     <path
//                       d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
//                       id="Fill-1"
//                       fill="#FBBC05"
//                     >
//                       {" "}
//                     </path>{" "}
//                     <path
//                       d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
//                       id="Fill-2"
//                       fill="#EB4335"
//                     >
//                       {" "}
//                     </path>{" "}
//                     <path
//                       d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
//                       id="Fill-3"
//                       fill="#34A853"
//                     >
//                       {" "}
//                     </path>{" "}
//                     <path
//                       d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
//                       id="Fill-4"
//                       fill="#4285F4"
//                     >
//                       {" "}
//                     </path>{" "}
//                   </g>{" "}
//                 </g>{" "}
//               </g>{" "}
//             </svg>
//             <span>Continue with Google</span>
//           </button>
//         </div>

//         {/* Create Account */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-teal-500 font-medium hover:underline"> 
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default login;