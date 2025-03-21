import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-purple-100 to-purple-200"> 
      <div className="relative w-[800px] max-w-full min-h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex w-full h-full">
          {/* Sign In & Sign Up Forms */}
          <div
            className={`absolute w-1/2 h-full flex flex-col items-center justify-center transition-transform duration-500 ${
              isSignUp ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Sign In Content */}
            {!isSignUp && (
              <>
                <h1 className="text-xl font-bold">Sign in</h1>
                <div className="flex space-x-3 my-4">
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaGooglePlusG />
                  </a>
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaLinkedinIn />
                  </a>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <a href="#" className="text-blue-500 text-sm mt-2">
                  Forgot your password?
                </a>
                <button className="bg-purple-600 text-white px-6 py-2 mt-4 rounded-full">
                  Sign In
                </button>
              </>
            )}

            {/* Sign Up Content */}
            {isSignUp && (
              <>
                <h1 className="text-xl font-bold">Create Account</h1>
                <div className="flex space-x-3 my-4">
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaGooglePlusG />
                  </a>
                  <a href="#" className="border border-gray-300 rounded-full p-2">
                    <FaLinkedinIn />
                  </a>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <button className="bg-purple-600 text-white px-6 py-2 mt-4 rounded-full">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Overlay Section */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-center px-10">
            {isSignUp ? (
              <>
                <h1 className="text-xl font-bold text-white">Welcome Back!</h1>
                <p className="text-white text-sm mt-2">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white text-white px-6 py-2 mt-4 rounded-full"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-xl font-bold text-white">Hello, Friend!</h1>
                <p className="text-white text-sm mt-2">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white text-white px-6 py-2 mt-4 rounded-full"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;