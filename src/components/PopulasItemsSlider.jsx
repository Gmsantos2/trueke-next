import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const PopularItemsSlider = ({ isLoading, popularItems, handleClick, URL }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: true,
    containScroll: 'keep',
    speed: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isIdle, setIsIdle] = useState(true); // Track idle state

  // Autoscroll configuration
  const scrollInterval = 3000;
  const scrollSpeed = 1;

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        if (emblaApi && isIdle) {
          emblaApi.scrollNext(scrollSpeed);
        }
      }, scrollInterval);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi, isIdle]);

  // Handle user interaction (mouse and touch events)
  const handleMouseDown = () => {
    setIsDragging(false);
    setIsIdle(false); // Stop autoscroll when the user interacts
  };

  const handleMouseMove = () => setIsDragging(true);

  const handleMouseUp = (item) => {
    if (!isDragging) {
      handleClick(item);
    }
    setIsIdle(true); // Resume autoscroll after interaction
  };

  const handleTouchStart = () => {
    setIsDragging(false);
    setIsIdle(false); // Stop autoscroll when the user interacts
  };

  const handleTouchMove = () => setIsDragging(true);

  const handleTouchEnd = (item) => {
    if (!isDragging) {
      handleClick(item);
    }
    setIsIdle(true); // Resume autoscroll after interaction
  };

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
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {popularItems.map((item) => (
              <div
                key={item._id}
                className="embla__slide p-2 flex flex-col h-full zoom"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp(item)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(item)}
              >
                <div className="flex justify-center items-center h-auto">
                  <div
                    className="flex justify-center items-center w-[200px] h-[200px] rounded-full shadow-md"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 84.6% 15.4%, 100% 50%, 84.6% 84.6%, 50% 100%, 15.4% 84.6%, 0% 50%, 15.4% 15.4%, 50% 0%)',
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
        </div>
      )}
    </>
  );
};

export default PopularItemsSlider;
