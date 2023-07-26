import React, { useState } from "react";
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.png"

const Hero = ({slideNumber}) => {
    const slides = [
        {
            id: 0,
            src: slide1
        },
        {
            id: 1,
            src: slide2
        }
    ]

    const isNull = (slideNumber === null || slideNumber === undefined)

    const [currentIndex, setCurrentIndex] = useState(isNull ? 0 : slideNumber);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const jumpToSlide = (index) => {
        setCurrentIndex(index)
    }

    console.log(slideNumber)

    return (
        <div className="h-[250px] group relative z-[-1]">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
                className={`w-full h-full bg-center bg-cover duration-300 ease-in-out`}
            >
            </div>
            {isNull && (
                <div className="transition ease-in-out duration-300 cursor-pointer group-hover:translate-x-14 absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-8 opacity-0 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white" onClick={prevSlide}>
                        <path strokeLinecap="square" d="M15.75 19.5L8.25 12l7.5-7.5" strokeWidth={2.5}/>
                    </svg>
                </div>)
            }
            {isNull && (
                <div className="transition ease-in-out duration-300 cursor-pointer group-hover:-translate-x-14 absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-8 opacity-0 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white" onClick={nextSlide}>
                        <path strokeLinecap="square" strokeLinejoin="square" d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeWidth={2.5} />
                    </svg>
                </div>)
            }
            {isNull && (
                <div className="absolute bottom-0 flex justify-center mb-6 left-[50%] items-center">
                    {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={`bg-white rounded-full mx-1 ${
                            currentIndex === index ? "w-4 h-4 opacity-100" : "w-3 h-3 opacity-50"
                          }`}
                        onClick={() => jumpToSlide(index)}
                    ></button>
                    ))}
              </div>)
            }
        </div>
    );
};

export default Hero;