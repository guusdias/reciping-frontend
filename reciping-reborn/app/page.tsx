import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center flex-col p-10">
          <Image
            className="mb-4"
            src="/logo.png"
            alt="logo"
            width={350}
            height={350}
          />
          <p className={`${lusitana.className} text-gray-700 text-lg`}>
            A new way to find your perfect clothe!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center">
          <h3 className="text-gray-800 text-3xl font-bold mb-6">Welcome!</h3>
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
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
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
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Log in
            </button>
            <div className="flex items-center justify-between mt-4">
              <a
                href="/forgot-password"
                className="text-sm text-gray-500 hover:text-gray-700"
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
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium hover:bg-gray-100 ml-4"
              >
                Facebook
              </button>
            </div>
            <div className="text-center mt-6">
              <Link
                href="/register"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
