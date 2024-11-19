'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'


const PopularItemsSlider = ({ isLoading, popularItems, handleClick, URL }) => {
  const [isDragging, setIsDragging] = useState(false)

  const autoplayOptions = {
    delay: 1500, // Reduce el delay para un movimiento más continuo
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    playOnInit: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
      speed: 0.5, // Reduce la velocidad (valor más alto = más lento)
      inViewThreshold: 0, // Hace que el desplazamiento sea más suave
    },
    [AutoPlay(autoplayOptions)]
  )

  const [slidesToShow, setSlidesToShow] = useState(5)

  const updateSlidesToShow = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 600) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(Math.min(5, popularItems.length))
      }
    }
  }, [popularItems.length])

  useEffect(() => {
    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [updateSlidesToShow])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi, slidesToShow])

  const handleMouseDown = () => setIsDragging(false)
  const handleMouseMove = () => setIsDragging(true)
  const handleMouseUp = (item) => !isDragging && handleClick(item)

  if (isLoading) {
    return (
      <div className="flex flex-1 p-3 justify-center items-center">
        <Image
          width={40}
          height={40}
          className="w-[40px] h-auto"
          src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
          alt="Cargando..."
        />
      </div>
    )
  }

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {popularItems.map((item) => (
          <div
            key={item._id}
            className={`embla__slide flex-[0_0_${100 / slidesToShow}%] min-w-0 p-2 flex flex-col h-full`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => handleMouseUp(item)}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={() => handleMouseUp(item)}
          >
            <div className="flex justify-center items-center h-auto zoom">
              <div
                className="flex justify-center items-center w-[200px] h-[200px] rounded-full shadow-md"
                style={{
                  clipPath: 'polygon(50% 0%, 84.6% 15.4%, 100% 50%, 84.6% 84.6%, 50% 100%, 15.4% 84.6%, 0% 50%, 15.4% 15.4%, 50% 0%)',
                }}
              >
                <Image
                  src={`${URL}${item.logo}`}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="text-center w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-montserrat text-white mt-2 w-[200px]">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .embla {
          --slide-spacing: 1rem;
          --slide-size: ${100 / slidesToShow}%;
          --slide-height: 19rem;
        }
        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
          margin-left: calc(var(--slide-spacing) * -1);
        }
        .embla__slide {
          flex: 0 0 var(--slide-size);
          min-width: 0;
          padding-left: var(--slide-spacing);
          position: relative;
        }
        .zoom {
          transition: transform 0.3s ease-in-out;
        }
        .zoom:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}

export default PopularItemsSlider