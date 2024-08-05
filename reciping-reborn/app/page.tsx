import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 items-center justify-center flex-col p-10 relative">
          <Image
            className="absolute left-10 top-10"
            src="/path/to/your/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p>2023. All rights reserved</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md mb-6 flex items-center">
            <Image
              src="/path/to/your/image/icon-message.png"
              alt="message icon"
              width={50}
              height={50}
            />
            <div className="ml-4">
              <p className="text-gray-700 text-sm">
                New message in the last 24 hours
              </p>
              <p className="text-gray-900 text-2xl font-bold">16,048</p>
              <p className="text-green-500 text-sm">+3%</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
            <Image
              src="/path/to/your/image/icon-users.png"
              alt="users icon"
              width={50}
              height={50}
            />
            <div className="ml-4">
              <p className="text-gray-700 text-sm">
                New users in the last 24 hours
              </p>
              <p className="text-gray-900 text-2xl font-bold">16,048</p>
              <p className="text-red-500 text-sm">-15%</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center">
          <h3 className="text-gray-800 text-3xl font-bold mb-6">
            Welcome back!
          </h3>
          <h4 className="text-xl font-medium text-gray-600 mb-6">Log in</h4>
          <form method="post" className="space-y-6 w-full">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>
            <div className="flex items-center justify-between mt-4">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-center text-gray-500 text-sm">OR</p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium hover:bg-gray-100"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium hover:bg-gray-100 ml-4"
              >
                <FaFacebook className="mr-2" />
                Facebook
              </button>
            </div>
            <div className="text-center mt-6">
              <a
                href="/register"
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Don't have an account? Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
