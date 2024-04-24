import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <div className='max-w-screen  mx-auto flex justify-between items-center p-4 text-white'>

        {/* left side */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text4xl px-2'>
                Cyber <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden md:flex items-center bg-gray-700 rounded-full text-sm p-1'>
                <p className='bg-black rounded-full p-2'>Delivery</p>
                <p className='p-2'>PickUp</p>
            </div>
        </div>

        {/* search input */}
        <div className='bg-gray-700 rounded-full flex items-center px-2 w-[200px] sm:w-[280px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus: outline-none' type="text" placeholder='search food items'/>
        </div>

        {/* cart button */}
        <button className='rounded-full md:flex hidden items-center py-2'><BsFillCartFill size={20} className='mr-2'/>Cart</button>

        {/* Overlay */}
        {nav ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'></div>: ""}

        {/* Side Drawer Menu */}
        <div className={nav ? 'fixed top-0 left-0 w-80 h-screen bg-black z-10 duration-300':'fixed top-0 left-[-100%] w-80 h-screen bg-black z-10 duration-300'}>
            <AiOutlineClose size={30} onClick={() => setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Cyber <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-400'>
                    <li className='flex py-4 text-xl'>
                        <TbTruckDelivery size={25} className='mr-4'/> Orders
                    </li>
                    <li className='flex py-4 text-xl'>
                        <MdFavorite size={25} className='mr-4'/> Favourites
                    </li>
                    <li className='flex py-4 text-xl'>
                        <FaWallet size={25} className='mr-4'/> Wallet
                    </li>
                    <li className='flex py-4 text-xl'>
                        <AiFillTag size={25} className='mr-4'/> Promotions
                    </li>
                    <li className='flex py-4 text-xl'>
                        <BsFillSaveFill size={25} className='mr-4'/> Best Ones
                    </li>
                    <li className='flex py-4 text-xl'>
                        <FaUserFriends size={25} className='mr-4'/> Invite Friends
                    </li>
                    <li className='flex py-4 text-xl'>
                        <MdHelp size={25} className='mr-4'/> Help
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar