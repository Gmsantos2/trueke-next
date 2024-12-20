'use client';

import React from 'react';
import Slider from 'react-slick';

const TypeFilter = ({ data, selectedType, setSelectedType }) => {
  const settings = {
    arrows: false,
    infinite: false,  
    //variableWidth: true,  
    slidesToShow: 6,  
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 4,  
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 3,  
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 2,  
        },
      },
    ],
  };

  return (
    <div className="bg-yellow-400 my-5 px-4 rounded-xl rounded-br-3xl">
      <Slider {...settings}>
        
        {/* Botón de "Todos" dentro del carrusel */}
        <button
          onClick={() => setSelectedType(null)}
          className={`bg-[#FFD521] p-1 m-4 min-w-[100px] text-center font-montserrat font-bold text-[#0062FF] rounded-lg shadow hover:bg-gray-400 whitespace-nowrap ${
            selectedType === null ? 'bg-gray-400' : ''
          }`}
        >
          Todos
        </button>

        {[...new Set(data.map((shop) => shop.type))].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`bg-[#FFD521] truncate p-1 m-4 min-w-[130px] text-center font-montserrat font-bold text-[#0062FF] rounded-lg shadow hover:bg-gray-400 whitespace-nowrap ${
              selectedType === type ? 'bg-gray-400' : ''
            }`}
          >
            {type}
          </button>
        ))}
    
      </Slider>
    </div>
  );
};

export default TypeFilter;
