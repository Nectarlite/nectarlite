"use client";
import Image from "next/image";
import React, { useState } from "react";
import images from "../assets/index";
import { TiMessages } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const Needhelp = () => {
  const router = useRouter();
  const [openChatBox, setOpenChatBox] = useState(false);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fname || !email) {
      alert("The input fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/needhelp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fname, email, desc }),
      });

      if (res.ok) {
        alert("Request sent successfully.");
        router.push("/");
      } else {
        throw new Error("Failed to Submit Request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="relative">
        {/* <div onClick={() => setOpenChatBox(!openChatBox)} className='fixed bottom-4 z-10 right-6 text-black cursor-pointer bg-white border-2 border-gray-500 rounded-full w-[200px] h-[70px] flex space-x-2 text-center '>
          {openChatBox ? (
            <>
              <div className='h-full w-[70px] flex items-center justify-center bg-purple-600 rounded-full '>
                <TiMessages size={50} className='text-white' />
              </div>
              <div className='py-3 text-start '>
                <h1 className='text-black capitalize'>need help?</h1>
                <h3 className='text-black capitalize text-xs'>chat with us!</h3>
              </div>
            </>
          ) : (
            <>
              <div className='h-full w-[70px] flex items-center justify-center bg-purple-600 rounded-full '>
                <TiMessages size={50} className='text-white' />
              </div>
              <div className='py-3 text-start '>
                <h1 className='text-black capitalize'>need help?</h1>
                <h3 className='text-black capitalize text-xs'>chat with us!</h3>
              </div>
            </>
          )}
        </div> */}
        <div className="fixed bottom-4 z-10 right-6 text-black cursor-pointer bg-white border-2 border-gray-500 rounded-full w-[200px] h-[70px] flex space-x-2 text-center ">
          <div className="h-full w-[70px] flex items-center justify-center bg-purple-600 rounded-full ">
            <a href="https://wa.me/message/JHYC2XPRHUE6H1" target="_blank" className="">
              <FaWhatsapp size={50} className="text-white" />
            </a>
          </div>
          <div className="py-3 text-start ">
            <a href="https://wa.me/message/JHYC2XPRHUE6H1" target="_blank" className="text-black capitalize">need help?</a> <br />
            <a href="https://wa.me/message/JHYC2XPRHUE6H1" target="_blank" className="text-black capitalize text-xs">chat with us!</a>
          </div>
        </div>

        {/* <div className={`fixed right-4 top-4 h-[500px] w-[350px] shadow-lg shadow-black bg-white bg-white-500 z-10 
        ${openChatBox ? "fixed right-4 top-4 h-[500px] w-[350px] shadow-lg shadow-black bg-white bg-white-500 z-10" : "hidden"} `}>
          <div className='w-full h-16 bg-black/90 flex p-2'>
            <div className='h-full w-[50px] flex items-center justify-center bg-purple-600 rounded-full '>
              <TiMessages size={30} className='text-white' />
            </div>
            <div className='py-3 text-start text-white flex flex-col pl-2 '>
              <h1 className='capitalize'>need help?</h1>
              <h3 className='capitalize text-xs'>chat with us!</h3>
            </div>
          </div>

          <div className='m-4 h-[400px] flex justify-center border-2 border-purple-500 items-center bg-white'>
            <div className='w-full h-full p-2  '>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col' >
                <h1>Please answer below questions</h1>
                <h1>What is your name? </h1>
                <input onChange={(e) => setFname(e.target.value)} value={fname} type='text' placeholder='Name' className='hover:border-2 hover:border-purple-500 focus:outline-none px-8 py-2' />
                <br />
                <h1 className='text-xl before:required:*:text-red-500'>What is your Email? </h1>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='Email' className='hover:border-2 hover:border-purple-500 focus:outline-none px-8 py-2' />
                <br />
                <h1>Description: </h1>
                <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={2} cols={2} placeholder='How can we help you?' className='hover:border-2 hover:border-purple-500 focus:outline-none px-8 py-2'></textarea>
                <br />
                <button type='submit' className='w-full h-10 bg-purple-500 text-white ' >Submit</button>
              </form>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Needhelp;
