import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-10 text-white'>
        <h1 className='text-white text-center font-bold text-4xl'>Top Categories</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 py-5'>
            {categories.map((item, index) => (
                <div key={index} className='bg-gray-900 m-2 rounded-lg flex justify-between items-center p-4'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories