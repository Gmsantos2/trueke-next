import React, { useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick"

const PopularItemsSlider = ({ isLoading, popularItems, handleClick, URL }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  const adjustedSettings = {
    dots: false,
    infinite: true, 
    slidesToShow: popularItems.length > 0 ? Math.min(5, popularItems.length) : 1,
    slidesToScroll: 1, 
    speed: 2000, 
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0, 
    cssEase: 'linear', 
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    beforeChange: () => setIsAutoplaying(false),  
    afterChange: () => setIsAutoplaying(true), 
  };

  const handleMouseDown = () => setIsDragging(false);
  const handleMouseMove = () => setIsDragging(true);
  const handleMouseUp = (item) => !isDragging && handleClick(item);

  return (
    <>
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
        <Slider {...adjustedSettings}>
          {popularItems.map((item) => (
            <div key={item._id}
              className="p-2 flex flex-col h-full zoom"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => handleMouseUp(item)}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={() => handleMouseUp(item)}
            >
              <div className="flex justify-center items-center h-auto">
                <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full shadow-md"
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%,  0% 30% )' }}>
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
                <p className="text-center font-montserrat text-white mt-2 w-[200px] line-clamp-1">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  )
}

export default PopularItemsSlider;
