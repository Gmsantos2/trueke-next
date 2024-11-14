'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick"

const RecommendationSlider = ({ allRecomendations, handleOpenModal, displayedItems, setSelectedCity  }) => {
  const [isDragging, setIsDragging] = useState(false)

  const settingsRecomendation = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: allRecomendations.length >= 4,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const handleMouseDown = () => setIsDragging(false)
  const handleMouseMove = () => setIsDragging(true)
  const handleMouseUp = () => !isDragging && handleClick()

  return (
    <div className="slider-1 p-3">
      <Slider {...settingsRecomendation}>
        {allRecomendations.length === 0 ? (
          <p className="p-5 font-montserrat text-white">No se ha encontrado ningún elemento.</p>
        ) : (
          allRecomendations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCity(item.city)}
              className="p-2 flex justify-center items-center content-center zoom"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => handleMouseUp(item)}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={() => handleMouseUp(item)}
            >
              <div className="flex justify-center w-full items-center max-sm:h-[50vw]">
                <div onClick={() => handleOpenModal(displayedItems)} className="relative flex justify-center items-center w-[290px] h-[290px]">
                  <Image
                    src={item.imagen}
                    alt={item.nombre}
                    width={290}
                    height={290}
                    className="w-full h-full object-cover shadow-2xl rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#171717] to-transparent rounded-b-lg"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold text-center w-full px-2">
                    {item.nombre}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  )
}

export default RecommendationSlider