"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { images } from "./Content"
import Description from './Description'


const Carousel = () => {
    const [activeImageIndex, setactiveImageIndex] = useState(0);

    const clickNext = () => {
        activeImageIndex === images.length - 1
            ? setactiveImageIndex(0)
            : setactiveImageIndex(activeImageIndex + 1);
    };

    const clickPrev = () => {
        activeImageIndex === 0
            ? setactiveImageIndex(images.length - 1)
            : setactiveImageIndex(activeImageIndex - 1);
    };

    // useEffect() for auto scroll
    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 7000);
        return () => {
            clearTimeout(timer);
        }
    }, [activeImageIndex]);

    return (
        <>
            <div className='slantDivB bg-gray-500 p-2 smc:h-screen'>
                <div className='grid place-items-center w-full mx-auto max-w-5xl xl:w-full shadow-2xl rounded-2xl '>
                    <div className='w-full grid grid-cols-2 md:grid md:grid-cols-1 gap-4  transition-transform ease-in-out duration-500 rounded-2xl'>
                        {images.map((pic, idx) => (
                            <div className={`${idx === activeImageIndex
                                ? "block smn:flex smn:w-full w-full h-[60vh] object-cover transition-all duration-500 ease-in-out" : "hidden"}  `} key={idx}>
                                <Image
                                    src={pic.src}
                                    alt='Logo'
                                    width={350}
                                    height={350}
                                    className='w-full h-full object-cover smn:rounded-3xl rounded-tl-3xl rounded-bl-3xl'
                                />

                            </div>
                        ))}
                        <Description
                            clickNext={clickNext}
                            clickPrev={clickPrev}
                            activeImageIndex={activeImageIndex}
                        />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousel