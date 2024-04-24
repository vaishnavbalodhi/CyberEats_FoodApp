import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)

    //Filter on type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => item.category===category)
        )
    }

    //Filter on price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => item.price===price)
        )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-10'>
        <h1 className='text-white text-center font-bold text-4xl'>Top Rated Menu Items </h1>
        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-white'>Filter Type</p>
                <div className='flex flex-wrap text-orange-500'>
                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-white'>Filter Price</p>
                <div className='flex flex-wrap w-full text-orange-500'>
                    <button onClick={() => filterPrice('$')} className='m-1 border-orange-600  hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600  hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600  hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600  hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='rounded-lg shadow-xl hover:scale-105 duration-300 bg-orange-400'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='text-black flex justify-between px-2 py-3'>
                        <p>{item.name}</p>
                        <p>
                            <span className='bg-black rounded-2xl text-white p-2'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food