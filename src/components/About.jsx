'use client'

import React from 'react';
import { Bounce, JackInTheBox, Rotate } from 'react-awesome-reveal';
import Image from 'next/image';

const About = () => {
    return (
        <div className='relative h-auto container mx-auto'>
            <div className='flex flex-col h-auto relative items-center justify-start pt-2'>
                <div className='flex h-auto items-center justify-center content-center w-full md:w-[50%] p-4'>
                    <Bounce>
                        <h2 className='text-xl sm:text-2xl md:text-4xl font-montserrat font-semibold text-[#1E1E1E] text-center'>
                            Impulsando el Éxito de las Tiendas con Publicidad Efectiva
                        </h2>
                    </Bounce>
                </div>

                <div className="w-full flex flex-col md:flex-row h-auto items-center justify-center text-white pt-12 gap-8">
                    <div className='w-full md:w-1/2 h-auto px-4'>
                        <JackInTheBox>
                            <div className='flex items-start justify-center'>
                                <div className='w-full max-w-[900px] bg-[#FFE680] text-black font-bold py-2 px-4 rounded-3xl overflow-hidden'>
                                    <Image 
                                        src="/about.png" 
                                        alt="Sobre Nosotros" 
                                        width={900} 
                                        height={600} 
                                        className='w-full h-auto object-contain'
                                        priority
                                    />
                                </div>
                            </div>
                        </JackInTheBox>
                    </div>

                    <div className='flex flex-col gap-10 justify-start w-full md:w-1/2 h-auto px-4'>
                        <div className="flex justify-between items-center mb-6">
                            {/* Línea izquierda */}
                            <div className="hidden sm:block w-20 sm:w-64 h-1 bg-[#1E1E1E]"></div>

                            <h1 className="text-lg text-[#1E1E1E] sm:text-2xl md:text-3xl font-medium text-center tracking-wide">
                                SOBRE NOSOTROS
                            </h1>

                            {/* Línea derecha */}
                            <div className="hidden sm:block w-20 sm:w-64 h-1 bg-[#1E1E1E]"></div>
                        </div>

                        <div className="flex flex-col  justify-center gap-7 w-full items-stretch">
                            {/* Quienes somos */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-lg p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#1E1E1E] flex-1 h-full flex flex-col">
                                        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                                            ¿Quiénes somos?
                                        </h2>
                                        <Bounce>
                                            <p className="text-center tracking-wider">
                                                Somos un equipo apasionado por la tecnología, dedicado a transformar la forma en que las tiendas conectan con sus clientes...
                                            </p>
                                        </Bounce>
                                    </div>
                                </Rotate>
                            </div>

                            {/* Nuestra Misión */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-lg p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#1E1E1E] flex-1 h-full flex flex-col">
                                        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                                            Nuestra Misión
                                        </h2>
                                        <Bounce>
                                            <p className="text-center tracking-wider">
                                                Nuestra misión es ofrecer un sistema de publicidad diseñado específicamente para las necesidades únicas de las tiendas...
                                            </p>
                                        </Bounce>
                                    </div>
                                </Rotate>
                            </div>

                            {/* Nuestra Visión */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-lg p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#1E1E1E] flex-1 h-full flex flex-col">
                                        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                                            Nuestra Visión
                                        </h2>
                                        <Bounce>
                                            <p className="text-center tracking-wider">
                                                Nuestra visión es transformar el entorno publicitario de las tiendas, haciendo que cada establecimiento...
                                            </p>
                                        </Bounce>
                                    </div>
                                </Rotate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
