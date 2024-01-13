import React from 'react'

const Navbar = () => {
  return (

    <div className='flex flex-row justify-end bg-[#2D2424]'>
        <div className='absolute top-0 left-0 p-8 w-1/6 text-center text-[#B85C38]'>Logo</div>
        <div className='w-1/6 p-8 text-[#B85C38] text-center'>
            Home
        </div>

        <div className='w-1/6 p-8 text-[#B85C38] text-center'>
            About
        </div>

        <div className='w-1/6 p-8 text-[#B85C38] text-center'>
            Contact
        </div>

        <div className='w-1/6 p-4 flex justify-center'>
        <button className=' w-1/2 hover:bg-[#B85C38] hover:text-[#5C3D2E] text-[#B85C38] text-center rounded-md bg-[#5C3D2E]'>
            Login
        </button>
        </div>
    </div>
  )
}

export default Navbar