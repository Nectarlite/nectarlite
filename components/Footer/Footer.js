"use client"
import React, { useState } from 'react'
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiArrowUpSFill } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa";

const Footer = () => {
  const [openBoxA, setOpenBoxA] = useState(false)
  const [openBoxB, setOpenBoxB] = useState(false)
  return (
    <>
      {/* <div className='h-[100px]'></div> */}
      <div className='w-full h-[85px] bg-purple-500 grid place-content-end sm:place-content-center p-4  '>
        <div className='space-x-4 '>
          <button className='py-3 sm:hidden px-4 border-2 border-black text-black hover:bg-black hover:text-white text-2xl capitalize font-bold  '>Need Help?</button>
          <button className='py-3 sm:hidden px-4 border-2 border-black text-black hover:bg-black hover:text-white text-2xl capitalize font-bold  '>Invite a Friend</button>
          <button className='py-3 px-4 shadow-xl shadow-purple-900 bg-gradient-to-tr from-blue-600 to-purple-600 text-white capitalize  text-2xl font-bold  '>Apply Now</button>
        </div>
      </div>

      <div className='h-[80vh] bg-gray-500 w-full p-4 sm:h-full '>
        <div className='mt-8 '>

          <div className='space-x-4 sm:flex sm:justify-center sm:items-center hidden  '>
            <button className='py-3 smg:text-base px-4 border-2 border-black text-black hover:bg-black hover:text-white text-2xl capitalize font-bold  '>Need Help?</button>
            <button className='py-3 smg:text-base px-4 border-2 border-black text-black hover:bg-black hover:text-white text-2xl capitalize font-bold  '>Invite a Friend</button>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid sm:grid-cols-1 sm:place-content-center sm:place-items-center
           place-content-center place-items-center gap-[4vw] space-x-4  '>
            <div className=' xl:hidden grid place-content-center w-full '>
              {/* <Image src={images.nectarimage} alt='Logo' height={50} width={50} className='rounded-full' /> */}
              <h1 className='font-bold text-white uppercase text-6xl text-center'>nectarlite
                <br />
                <span>technology</span>
              </h1>
              <span className='capitalize text-2xl font-light '>Leading technology to the future....</span>
              <br />
              <button className='w-60 p-2 bg-purple-500 rounded-3xl text-white capitalize  text-2xl font-bold '>
                Apply Now
              </button>
            </div>

            <div className=' space-y-2'>
              <h2 className='sm:hidden text-2xl font-bold'>Quick Links</h2>
              <ul className='sm:hidden text-xl space-y-2 '>
                <li><a href='#' >C<sup>#</sup></a></li>
                <li><a href='#' >C<sup>++</sup></a></li>
                <li><a href='#' >Python</a></li>
                <li><a href='#' >PHP</a></li>
                <li><a href='#' >Java</a></li>
                <li><a href='#' >Javascript</a></li>
                <li><a href='#' >Cybersecurity</a></li>
                <li><a href='#' >Solidity</a></li>
              </ul>
              {/* Onclick starts B */}
              <h2 onClick={() => setOpenBoxB(!openBoxB)} className='hidden sm:flex text-2xl cursor-pointer font-bold w-full'>
                {openBoxB ? (
                  <>
                    <div className='flex'>Quick Links <RiArrowUpSFill size={30} /> </div>
                  </>
                ) : (
                  <>
                    <div className='flex'>Quick Links <FaSortDown /> </div>
                  </>
                )}
              </h2>
              <div className='sm:flex sm:items-center hidden '>
                <ul className={`text-xl space-y-2 ${openBoxB ? "text-xl space-y-2" : "hidden"} `} >
                  <li><a href='#' >C<sup>#</sup></a></li>
                  <li><a href='#' >C<sup>++</sup></a></li>
                  <li><a href='#' >Python</a></li>
                  <li><a href='#' >PHP</a></li>
                  <li><a href='#' >Java</a></li>
                  <li><a href='#' >Javascript</a></li>
                  <li><a href='#' >Cybersecurity</a></li>
                  <li><a href='#' >Solidity</a></li>
                </ul>
              </div>
              {/* Onclick ends */}
            </div>

            <div className='space-y-2'>
              <h2 className='sm:hidden text-2xl font-bold'>Programes</h2>
              <ul className='sm:hidden text-xl space-y-2 '>
                <li><a href='#' >C<sup>#</sup></a></li>
                <li><a href='#' >C<sup>++</sup></a></li>
                <li><a href='#' >Python</a></li>
                <li><a href='#' >PHP</a></li>
                <li><a href='#' >Java</a></li>
                <li><a href='#' >Javascript</a></li>
                <li><a href='#' >Cybersecurity</a></li>
                <li><a href='#' >Solidity</a></li>
              </ul>
              {/* Onclick starts A */}
              <h2 onClick={() => setOpenBoxA(!openBoxA)} className='hidden sm:flex text-2xl cursor-pointer font-bold w-full'>
                {openBoxA ? (
                  <>
                    <div className='flex'>Programes <RiArrowUpSFill size={30} /> </div>
                  </>
                ) : (
                  <>
                    <div className='flex'>Programes <FaSortDown /> </div>
                  </>
                )}
              </h2>
              <div className='sm:flex sm:items-center hidden '>
                <ul className={`text-xl space-y-2 ${openBoxA ? "text-xl space-y-2" : "hidden"} `} >
                  <li><a href='#' >C<sup>#</sup></a></li>
                  <li><a href='#' >C<sup>++</sup></a></li>
                  <li><a href='#' >Python</a></li>
                  <li><a href='#' >PHP</a></li>
                  <li><a href='#' >Java</a></li>
                  <li><a href='#' >Javascript</a></li>
                  <li><a href='#' >Cybersecurity</a></li>
                  <li><a href='#' >Solidity</a></li>
                </ul>
              </div>
              {/* Onclick ends */}
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-16 px-8 p-2">
          <a href="#" className="text-2xl sma:text-xl font-semibold"><FaTelegramPlane /></a>
          <a href="#" className="text-2xl sma:text-xl font-semibold"><BsTwitterX /></a>
          <a href="#" className="text-2xl sma:text-xl font-semibold"><FaInstagram /></a>
          <a href="#" className="text-2xl sma:text-xl font-semibold"><FaFacebookF /></a>
          <span className='border-l-2 border-l-black'>.</span>
          <h1 className='font-bold text-2xl uppercase sma:text-lg'>Nectarlite</h1>
        </div>
      </div>
    </>
  )
}

export default Footer