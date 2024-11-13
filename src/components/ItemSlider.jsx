'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick"

const ItemSlider = ({ isLoading, displayedItems, handleClick, handleOpenModal, URL }) => {
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: displayedItems.length > 0 ? Math.min(5, displayedItems.length) : 1,
    slidesToScroll: 1,
    swipe: displayedItems.length >= 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: displayedItems.length >= 3 ? 3 : displayedItems.length,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: displayedItems.length >= 2 ? 2 : displayedItems.length,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const handleMouseDown = () => setIsDragging(false)
  const handleMouseMove = () => setIsDragging(true)
  const handleMouseUp = (item) => !isDragging && handleClick(item)

  const goToFirstSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0)
    }
  }

  useEffect(() => {
    goToFirstSlide()
  }, [displayedItems])

  return (
    <div className="slider-1 slider-f">
      {isLoading ? (
        <div className="flex flex-1 p-3 justify-center items-center">
          <Image
            width={40}
            height={40}
            className="w-[40px] h-auto"
            src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
            alt="Cargando..."
          />
        </div>
      ) : (
        <Slider {...settings} ref={sliderRef}>
          {displayedItems.length === 0 ? (
            <p className="p-5 font-montserrat text-white">No se ha encontrado ningún elemento.</p>
          ) : (
            displayedItems.map((item) => (
              <div
                key={item._id}
                className="p-2 flex flex-col h-full zoom"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp(item)}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={() => handleMouseUp(item)}
              >
                <div className="flex justify-center w-full items-center">
                  <div className="w-[220px] h-[220px]">
                    <Image
                      src={`${URL}${item.logo}`}
                      alt={item.name}
                      width={220}
                      height={220}
                      className="w-full h-full object-cover shadow-2xl text-center"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-center font-montserrat font-extralight text-white mt-2 w-[200px]">
                    {item.name}
                  </p>
                </div>
              </div>
            ))
          )}
        </Slider>
      )}
      {displayedItems.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={() => handleOpenModal(displayedItems)}
            className="bg-transparent text-end text-white p-2 rounded-lg mt-4"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  )
}

export default ItemSlider