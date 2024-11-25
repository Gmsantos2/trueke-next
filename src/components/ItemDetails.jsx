'use client';

import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Comments from '../components/Comments';
import SocialIcon from '../components/SocialIcon';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import Image from 'next/image'
import SliderImg from './SliderImg';

const Emoji = ({ averageScore }) => {
  if (averageScore >= 4) return '😃'; // Excelente
  if (averageScore >= 3) return '😊'; // Bueno
  if (averageScore >= 2) return '😐'; // Regular
  if (averageScore >= 1) return '😕'; // Bajo
  return '😢'; // Muy bajo
};

const ItemDetail = ({ id }) => {
  const URL = 'https://trueke.nodo.com.ec';
  const [item, setItem] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchItemDetails = async () => {
      try {
        const { data } = await axios.get(`${URL}/api/v1/shop/${id}/info`, {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        setItem(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchItemDetails();
    window.scrollTo(0, 0);
  }, [id]);




  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>No se encontraron detalles del item.</div>;
  const scores = item.scores || {};
  const averageScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.values(scores).length;

  const itemsCount = item.socials ? item.socials.length : 0;
  const averageScore1 = 9;

  return (
    <div style={{ backgroundColor: item.colors.bg, color: item.colors.text, minHeight: '100vh' }} className='min-w-[100vw]'>
      <div className="min-h-screen container mx-auto">
        {/* Contenedor general */}
        <div className="relative flex flex-1 flex-col items-center md:flex-row md:items-start md:justify-start w-full">
          {/* Logo en la esquina superior izquierda en pantallas grandes, centrado en pantallas pequeñas */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-4 md:left-4 md:translate-x-0 flex flex-col items-center">
            <Image
              src={`${URL}${item.logo}`}
              alt="Logo"
              className="max-w-xs w-auto"
              width={280} 
              height={280} 
              sizes="(max-width: 767px) 260px, (max-width: 1024px) 220px, 250px" 
              priority 
              style={{
                height: 'auto',
                maxHeight: '280px',
              }}
            />
          </div>


          {/* Contenedor para el carrusel y la información */}
          <div className="container mt-[300px] md:mt-0 md:ml-24 flex h-[40vh] flex-col items-center content-center justify-center gap-8">
            {/* Información principal */}
            <div className="md:w-2/3 max-sm:w-full text-center mt-3 flex flex-col items-center">
              <h1 className="text-4xl md:text-xl font-bold font-montserrat md:pl-10" style={{ color: item.colors?.['text'] || 'white' }}>
                {item.name}
              </h1>
              <p className="mt-4 font-montserrat md:pl-10 " style={{ color: item.colors?.['text'] || 'white' }}>
                {item.desc}
              </p>
              {/* Tags */}
              {/* <div className="mt-4 flex gap-5 overflow-x-scroll scrollbar-hide touch-pan-x max-w-full mx-2"> */}
              <div className="flex gap-3 overflow-x-scroll  my-5 scrollbar-hide max-w-full ">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-xl flex-shrink-0"
                    style={{
                      backgroundColor: item.colors?.button || 'white',
                      color: item.colors['text'] || 'white',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Popularidad */}
          <div className="absolute top-4 right-8 flex flex-col items-center  gap-4">

            <div className="text-4xl">
              <Emoji averageScore={averageScore.toFixed(1)} />
            </div>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 15l-5.878 3.09 1.121-6.566L0 6.09l6.616-.577L10 0l2.384 5.513L19 6.09l-5.243 5.434 1.121 6.566z" />
              </svg>
              <span className="text-xl font-montserrat">{averageScore.toFixed(0)}</span>
            </div>
          </div>


        </div>




        <div className='flex justify-between gap-8 p-6 max-md:flex-col'>
          <div className="flex gap-4 max-md:justify-center">
            {/* Botón para Llamada */}
            <div
              className="flex justify-center items-center h-10 rounded-2xl"
              style={{
                backgroundColor: hoveredItemId === 'call' ? item.colors.hover : item.colors.button,
              }}
            >
              <a href="tel:+123456789" className="flex justify-center !bg-transparent">
                <button
                  className="flex items-center max-xl:h-auto justify-center p-2 rounded gap-2 !bg-transparent"
                  onMouseEnter={() => setHoveredItemId('call')}
                  onMouseLeave={() => setHoveredItemId(null)}
                >
                  <FiPhone size={24} color={item.colors.icon} />
                  <p
                    className="font-montserrat content-center max-sm:hidden"
                    style={{
                      color: hoveredItemId === 'call' ? item.colors['button-text'] : item.colors['text'],
                    }}
                  >
                    Llamada
                  </p>
                </button>
              </a>
            </div>

            {/* Botón para Encontrarnos en el Mapa */}
            <div
              className="flex justify-center items-center h-10 rounded-2xl"
              style={{
                backgroundColor: hoveredItemId === 'map' ? item.colors.hover : item.colors.button,
              }}
            >
              <a
                href="https://maps.google.com?q=Your+Business+Location"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center !bg-transparent"
              >
                <button
                  className="flex items-center max-xl:h-auto justify-center p-2 rounded gap-2 !bg-transparent"
                  onMouseEnter={() => setHoveredItemId('map')}
                  onMouseLeave={() => setHoveredItemId(null)}
                >
                  <FiMapPin size={24} color={item.colors.icon} />
                  <p
                    className="font-montserrat content-center max-sm:hidden"
                    style={{
                      color: hoveredItemId === 'map' ? item.colors['button-text'] : item.colors.text,
                    }}
                  >
                    Encuentranos
                  </p>
                </button>
              </a>
            </div>

          </div>

          {/* Carrusel de redes sociales */}
          <div className="flex flex-1 relative items-center justify-center">
            <div className="flex flex-col w-[300px] gap-5 relative">
              <div>
                <span className="text-2xl md:text-xl font-bold font-montserrat" style={{ color: item.colors?.['text'] || 'white' }}>
                  Nuestras Redes Sociales
                </span>
              </div>

              {/* Flecha hacia la izquierda */}
              {itemsCount > 3 && (
                <div className="absolute -left-6 top-[68%] transform -translate-y-1/3 z-10">
                  <button onClick={() => swiperRef.slidePrev()} className="!bg-transparent flex items-center justify-center p-2 transition duration-200">
                    <FiChevronLeft style={{ color: item.colors?.['button-text'], fontSize: '30px' }} />
                  </button>
                </div>
              )}

              <Swiper
                direction="horizontal"
                pagination={{ clickable: true }}
                spaceBetween={30}
                //centeredSlides={itemsCount > 3}
                slidesPerView={3}
                onSwiper={setSwiperRef}
                allowSlideNext={itemsCount > 3}
                allowSlidePrev={itemsCount > 3}
                style={{ width: '90%' }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: itemsCount < 3 ? itemsCount : 3,
                  },
                }}
              >
                {item.socials && item.socials.length > 0 &&
                  item.socials.map((items) => (
                    <SwiperSlide key={items.url} className="!flex !justify-center">
                      <div
                        className="flex justify-center items-center w-[60px] rounded-2xl"
                        style={{
                          backgroundColor: hoveredItemId === items.url ? item.colors.hover : item.colors.button,
                        }}
                      >
                        <a href={items.url} className="flex justify-center !bg-transparent">
                          <button
                            className="flex items-center justify-center p-2 rounded gap-8 !bg-transparent"
                            onMouseEnter={() => setHoveredItemId(items.url)}
                            onMouseLeave={() => setHoveredItemId(null)}
                          >
                            <SocialIcon name={items.name} color={item.colors.icon} />
                          </button>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Flecha hacia la derecha */}
              {itemsCount > 3 && (
                <div className="absolute -right-6 top-[68%] transform -translate-y-1/3 z-10">
                  <button onClick={() => swiperRef.slideNext()} className="!bg-transparent flex items-center justify-center p-2 transition duration-200">
                    <FiChevronRight style={{ color: item.colors?.['button-text'], fontSize: '30px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
        <div className='h-[400px] p-4'>
        <SliderImg />
        </div>
        <div>
        <Comments />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
