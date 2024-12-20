'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.module.css';
import Image from 'next/image';
import { JackInTheBox } from "react-awesome-reveal";

const CustomNextArrow = ({ className, onClick }) => {
  return (
    <button className={`${className} custom-next`} onClick={onClick}></button>
  );
};

const CustomPrevArrow = ({ className, onClick }) => {
  return (
    <button className={`${className} custom-prev`} onClick={onClick}></button>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          arrows: false,
        },
      },
    ],
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-2 relative carousel-container max-lg:w-[90vw] py-8">
      <h2 className="text-center text-[#0062FF] font-black font-montserrat text-2xl md:text-4xl italic mb-8">
        ¿Por qué elegir TRUEKE?
      </h2>
      <JackInTheBox>
        <Slider {...settings}>
          <div className="slide container bg-[#0062FF] rounded-3xl p-6 md:p-8 shadow-lg">
            <div className='flex flex-row h-[90%] justify-center items-center content-center'>
              <div className="flex justify-end w-[20%]">
                <Image
                  src="/midnight-unscreen.gif"
                  alt="Icono 1"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col ml-6 w-[55%]">
                <h3 className="text-xl md:text-3xl font-extrabold italic font-montserrat text-center text-[#FFD521]">
                  OPTIMIZACIÓN EN TIEMPO REAL
                </h3>
                <p className="font-light font-montserrat text-[#ffffff] text-center mt-4 text-sm md:text-lg">
                  Monitorea y ajusta el rendimiento de tus campañas en tiempo real.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide container bg-[#0062FF] rounded-3xl p-6 md:p-8 shadow-lg">
            <div className='flex flex-row h-[90%] justify-center items-center content-center'>
              <div className="flex justify-end w-[20%]">
                <Image
                  src="/click-unscreen.gif"
                  alt="Icono 2"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col ml-6 w-[55%]">
              <h3 className="text-xl md:text-3xl font-extrabold italic font-montserrat text-center text-[#FFD521]">
                  AUTOMATIZACIÓN DE CAMPAÑAS
                </h3>
                <p className="font-light font-montserrat text-[#ffffff] text-center mt-4 text-sm md:text-lg">
                  Automatiza y optimiza cada paso en tus campañas digitales.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide container bg-[#0062FF] rounded-3xl p-6 md:p-8 shadow-lg">
            <div className='flex flex-row h-[90%] justify-center items-center content-center'>
              <div className="flex justify-end w-[20%]">
                <Image
                  src="/economy-unscreen.gif"
                  alt="Icono 3"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col ml-6 w-[55%]">
              <h3 className="text-xl md:text-3xl font-extrabold italic font-montserrat text-center text-[#FFD521]">
                  ANÁLISIS DETALLADO
                </h3>
                <p className="font-light font-montserrat text-[#ffffff] text-center mt-4 text-sm md:text-lg">
                  Analiza cada métrica clave con reportes visuales detallados.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide container bg-[#0062FF] rounded-3xl p-6 md:p-8 shadow-lg">
            <div className='flex flex-row h-[90%] justify-center items-center content-center'>
              <div className="flex justify-end w-[20%]">
              <Image
                src="/settings-unscreen.gif"
                alt="Icono 4"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col ml-6 w-[55%]">
            <h3 className="text-xl md:text-3xl font-extrabold italic font-montserrat text-center text-[#FFD521]">
              Personalización de Anuncios
            </h3>
            <p className="font-light font-montserrat text-[#ffffff] text-center mt-4 text-sm md:text-lg">
              Personaliza el contenido y las ofertas en función de las preferencias de los usuarios para aumentar la relevancia.
            </p>
            </div>
          </div>
          </div>
        </Slider>
      </JackInTheBox>
    </div>
  );
};

export default Carousel;
