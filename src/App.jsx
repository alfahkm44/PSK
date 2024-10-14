import React, { useState } from 'react';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100"> 
      {/* Ganti bg-special-mainBg dengan kelas yang terdefinisi */}
      <div className="w-full max-w-sm">
        <h1 className="text-center text-3xl font-bold text-teal-500">
          FINEbank<span className="text-teal-500">.IO</span>
        </h1>
        <div className="mt-16">
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="py-3 ps-4 text-sm border rounded-md w-full bg-gray-100 border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-0" 
                placeholder="hello@example.com"
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
            <div className="mb-3">
              <input
                type="checkbox"
                className="text-sm accent-primary" 
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-500 ms-6"> {/* Ganti text-gray-01 dengan kelas yang terdefinisi */}
                Keep me signed in
              </label>
            </div>
            <button
              className="h-12 rounded-md text-sm bg-teal-500 w-full text-white" // Ganti bg-primary dengan kelas yang terdefinisi
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        {/* teks start */}
        <div className="my-9 px-7 flex justify-center text-xs text-gray-500 items-center flex-col static"> {/* Ganti text-gray-03 dengan kelas yang terdefinisi */}
          <div className="border border-gray-300 w-full"></div> {/* Ganti border-gray-05 dengan kelas yang terdefinisi */}
          <div className="px-2 bg-gray-100 absolute">  {/* Ganti bg-special-mainBg dengan kelas yang terdefinisi */}
            or sign in with
          </div>
        </div>
        {/* teks end */}
         {/* sign in with google start */}
         <div className="mb-8">
            <a
              href="https://accounts.google.com/signin"  // URL Login Google
              target="_blank"   // Buka di tab baru
              rel="noopener noreferrer"  // Untuk keamanan
              className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-200 text-gray-700" 
            >
              <svg
                class="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    {" "}
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
              <span>Continue with Google</span>
            </a>
          </div>
        {/* sign in with google end */}
        {/* link start */}
        <div className="flex justify-center">
          <a className="text-teal-500 text-sm font-bold"> {/* Ganti text-primary dengan kelas yang terdefinisi */}
            Create an account
          </a>
        </div>
        {/* link end */}
      </div>
    </div>
  );
};

export default App;