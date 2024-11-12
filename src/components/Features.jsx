'use client'

import React from 'react';
import { Bounce, Slide, JackInTheBox, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

const Features = () => {
  return (
    <section className='relative h-auto min-w-full bg-[#FFD521] flex flex-col items-start lg:flex-row py-5'>
      {/* Sección izquierda */}
      <div className='flex flex-col w-full lg:w-[50vw] h-auto lg:items-start lg:text-left mb-12 lg:mb-0'>
        {/* Contenido sección izquierda */}
        <div className='flex flex-col lg:flex-row justify-between pb-10 px-6 lg:px-10 items-center'>
          <h2 className='text-[#1E1E1E] text-lg lg:text-xl font-montserrat font-semibold lg:w-[50%]'>
            Pago Rápido y Seguro con Códigos QR
          </h2>
          <Zoom>
            <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl mt-4 lg:mt-0'>
              <Image 
                src="/pay-qr.jpeg" 
                alt="imgqr" 
                width={200} 
                height={200} 
                className="w-full h-full  object-cover rounded-full shadow-lg" 
              />
            </div>
          </Zoom>
        </div>
        <div className='flex flex-col gap-8 lg:gap-12 px-6 lg:px-10'>
          <Bounce>
            <p className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
              Con TrueKE, realizar pagos es más fácil que nunca. Escanea el código QR y completa tu transacción en segundos, de manera segura y sin complicaciones.
            </p>
          </Bounce>
          <div>
            <ul className='space-y-2 lg:space-y-0'>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    No se necesita introducir datos manualmente.
                  </h3>
                </li>
              </Slide>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    Transacciones protegidas mediante cifrado avanzado.
                  </h3>
                </li>
              </Slide>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    Ideal para un proceso de pago higiénico y sin contacto físico.
                  </h3>
                </li>
              </Slide>
            </ul>
          </div>
          <JackInTheBox>
            <p className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
              Puede aceptar pagos desde las principales plataformas bancarias y aplicaciones de pago compatibles con QR.
            </p>
          </JackInTheBox>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="w-full lg:w-[2px] lg:h-[75vh] h-[2px] bg-[#1E1E1E] my-8 lg:my-0 mx-10 lg:mx-9"></div>

      {/* Sección derecha */}
      <div className='flex h-auto flex-col w-full lg:w-[50vw] lg:items-start lg:text-left mb-12 lg:mb-0'>
        {/* Contenido sección derecha */}
        <div className='flex flex-col lg:flex-row justify-between pb-10 px-6 lg:px-10 items-center'>
          <h2 className='text-[#1E1E1E] text-lg lg:text-xl font-montserrat font-semibold lg:w-[50%]'>
            Servicios Adicionales para la comodidad del cliente
          </h2>
          <Zoom>
            <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl mt-4 lg:mt-0'>
              <Image 
                src="/wifi-qr.jpg" 
                alt="imgqr" 
                width={200} 
                height={200} 
                className="w-full h-full  object-cover rounded-full shadow-lg" 
              />
            </div>
          </Zoom>
        </div>
        <div className='flex flex-col gap-8 lg:gap-12 px-6 lg:px-10'>
          <Bounce>
            <p className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
              TrueKE le permite gestionar y optimizar todos los servicios que ofrezca su local.
            </p>
          </Bounce>
          <div>
            <ul className='space-y-2 lg:space-y-0'>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    Wi-Fi Gratis
                  </h3>
                </li>
              </Slide>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    Servicio de taxis
                  </h3>
                </li>
              </Slide>
              <Slide>
                <li className='flex gap-2 py-1 items-start'>
                  <Image src="/checkbox-circle-fill.png" alt="" width={20} height={20} className='object-contain' />
                  <h3 className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
                    Contacto.
                  </h3>
                </li>
              </Slide>
            </ul>
          </div>
          <JackInTheBox>
            <p className='text-[#1E1E1E] text-xs lg:text-base font-montserrat font-normal text-justify'>
              Puede aceptar pagos desde las principales plataformas bancarias y aplicaciones de pago compatibles con QR.
            </p>
          </JackInTheBox>
        </div>
      </div>
    </section>
  );
};

export default Features;
