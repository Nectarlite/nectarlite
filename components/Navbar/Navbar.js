"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../assets/index";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);

  // let menuRef = useRef();

  // useEffect(() => {
  //     let handler = (e) => {
  //         if(menuRef.current.contain(e.target)){
  //             setOpenNav(false);
  //         }
  //     };
  //     document.addEventListener("mousedown", handler);
  //     return () => {
  //         document.addEventListener("click", handler);
  //     };
  // });
  return (
    <>
      <header className="sticky top-0 z-10 bg-white shadow-md shadow-black text-black w-full h-[100px] ">
        <div className="w-[80%] xl:w-full h-full flex justify-between items-center mx-auto px-4">
          <div className="">
            <div
              className="bg-[#b5179e] grid place-content-center place-items-center absolute 
                                       top-0 w-[180px] h-[180px] smc:w-[120px] shadow-lg shadow-purple-600 z-10  "
            >
              <Image
                src={images.nectarimage}
                alt="Logo"
                height={100}
                width={100}
                className="rounded-full"
              />
              <h1 className="font-bold text-white uppercase text-2xl smc:text-base text-center">
                nectarlite
                <br />
                <hr className="border-t-2 border-black"></hr>
                <span>technology</span>
              </h1>
            </div>
          </div>
          <div className="xl:hidden">
            <div className="flex space-x-2 uppercase">
              <Link
                href={"/"}
                className="text-xl py-3 hover:shadow-xl px-4 capitalize font-bold hover:text-purple-900 rounded-xl  "
              >
                home
              </Link>
              <Link
                href={"/about"}
                className="text-xl py-3 hover:shadow-xl px-4 capitalize font-bold hover:text-purple-900 rounded-xl  "
              >
                about
              </Link>
              {/* <Link
                href={"/contact"}
                className="text-xl py-3 hover:shadow-xl px-4 capitalize font-bold hover:text-purple-900 rounded-xl  "
              >
                contact
              </Link> */}
              {/* <Link
                href={"/help"}
                className="text-xl py-3 hover:shadow-xl px-4 capitalize font-bold hover:text-purple-900 rounded-xl  "
              >
                help
              </Link> */}
              {/* <Link href={"/"} className='text-xl py-3 hover:shadow-xl hover:shadow-purple-500 px-4 rounded-xl  bg-purple-600 text-white capitalize font-bold ' >login</Link> */}
            </div>
          </div>
          <div className="xl:flex xl:flex-col hidden relative">
            <div className="w-full space-x-4 flex ">
              <button className="p-2 w-44 smc:w-28 mdn:text-base bg-[#b5179e] text-white capitalize rounded-xl text-2xl font-bold  ">
                enroll
              </button>
              <div className="" onClick={() => setOpenNav(!openNav)}>
                {openNav ? (
                  <button className="text-4xl mdn:text-2xl">
                    <IoMdClose />
                  </button>
                ) : (
                  <button className="" onClick={() => setOpenNav(!openNav)}>
                    <GiHamburgerMenu className="text-4xl mdn:text-2xl" />
                  </button>
                )}
              </div>
            </div>

            <div
              className={`absolute top-[75px] -right-4 z-10 h-[400px] w-[350px] smlx:w-[300px] shadow-lg shadow-black bg-white text-black
                                       ${
                                         openNav
                                           ? "absolute top-[75px] -right-4 z-10 h-[400px] w-[350px] smlx:w-[300px] shadow-lg shadow-black bg-white text-black"
                                           : "hidden"
                                       } `}
            >
              <div className="h-2 w-full bg-purple-500 "></div>
              <div className="grid place-content-start gap-[4vh] w-full px-4 mx-auto py-4 ">
                <button className="p-2 bg-purple-500 rounded-xl text-xl text-white uppercase font-bold mx-auto w-44">
                  Sign Up
                </button>
                <ul className="grid gap-[4vh] w-full ">
                  <li className="text-2xl text-black font-bold capitalize border-b-2 border-b-purple-500">
                    <Link href={"/"}>home</Link>
                  </li>
                  <li className="text-2xl text-black font-bold capitalize border-b-2 border-b-purple-500">
                    <Link href={"/about"}>about us</Link>
                  </li>
                  <li className="text-2xl text-black font-bold capitalize border-b-2 border-b-purple-500">
                    <Link href={"/contact"}>contact us</Link>
                  </li>
                  <li className="text-2xl text-black font-bold capitalize border-b-2 border-b-purple-500">
                    <Link href={"/"}>programes</Link>
                  </li>
                </ul>
              </div>
              {/* <div className='absolute right-0 top-[95px] w-[45%] h-[40vh] items-end text-end pr-2 text-black'> hgcuytf</div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[4vw] px-8 bg-[#b5179e] xl:hidden p-2">
          <a
            href="#"
            className="text-2xl text-white hover:border-l-white hover:text-black font-semibold border-l-2 border-l-black"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href="#"
            className="text-2xl font-semibold border-l-2 border-l-black"
          >
            <BsTwitterX size={20} />
          </a>
          <a
            href="#"
            className="text-2xl font-semibold border-l-2 border-l-black"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-2xl font-semibold border-l-2 border-l-black"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
