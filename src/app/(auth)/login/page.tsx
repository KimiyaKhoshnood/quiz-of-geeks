"use client"
import Link from "next/link"

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-6 py-12 rounded-lg shadow-md text-center w-96 flex flex-col gap-6">
        <h2 className='font-bold text-2xl'>Login</h2>
        <form action="" className='flex flex-col gap-3 items-center'>
            <input type="text" placeholder='Username' className='border border-gray-300 rounded-sm py-2 px-4' />
            <input type="text" placeholder='Password' className='border border-gray-300 rounded-sm py-2 px-4' />
            <Link href={"/"} className='px-4 py-2 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white w-fit rounded-lg'>Let's Go</Link>
        </form>
      </div>
    </div>
  )
}

export default login