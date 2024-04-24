import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='mx-auto p-4 py-10 grid md:grid-cols-3 gap-5'>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='text-white w-full h-full rounded-xl absolute bg-black/50'>
                <p className='font-bold text-2xl px-2 pt-4'>Sizzler Buffet</p>
                <p className='px-2'>Veg/Non-Veg</p>
                <button className='mx-2 absolute bg-white text-black bottom-4'>Order Now</button>
            </div>
            <img className='w-full rounded-xl' src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Image"/>
        </div>
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='text-white w-full h-full rounded-xl absolute bg-black/50'>
                <p className='font-bold text-2xl px-2 pt-4'>New Items</p>
                <p className='px-2'>Added Daily</p>
                <button className='mx-2 absolute bg-white text-black bottom-4'>Order Now</button>
            </div>
            <img className='w-full rounded-xl' src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Image"/>
        </div>
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='text-white w-full h-full rounded-xl absolute bg-black/50'>
                <p className='font-bold text-2xl px-2 pt-4'>Party Combos</p>
                <p className='px-2'>Special Offers</p>
                <button className='mx-2 absolute bg-white text-black bottom-4'>Order Now</button>
            </div>
            <img className='w-full rounded-xl' src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Image"/>
        </div>
    </div>
  )
}

export default HeadlineCards