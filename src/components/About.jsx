'use client'

import React from 'react';
import { Bounce, JackInTheBox, Rotate } from 'react-awesome-reveal';
import Image from 'next/image';

const About = () => {
    return (
        <div className='relative container mx-auto pt-10 pb-5'>

            <div className='flex absolute -left-8 -bottom-0 w-[50%] h-[100%] max-md:hidden'>
                <JackInTheBox>
                    <Image
                        src="/about-img.png"
                        alt="Sobre Nosotros"
                        width={500}
                        height={800}
                        className='object-contain bottom-0 left-0 w-full h-full'
                        priority
                    />
                </JackInTheBox>
            </div>

            <div className='flex flex-col h-auto relative items-center justify-start'>
                <div className='flex h-auto max-sm:justify-center justify-end w-full p-4 pr-12 max-sm:pr-0 pt-5'>
                    <Bounce>
                        <h2 className=' w-[65vw] text-right max-sm:text-center text-balance text-xl sm:text-2xl md:text-5xl font-montserrat font-bold italic text-[#0062FF]'>
                            Impulsando el Éxito de las Tiendas con Publicidad Efectiva
                        </h2>
                    </Bounce>
                </div>


                <div className="w-full flex flex-col md:flex-row h-auto items-center justify-end text-white pt-8 gap-8">
                    <div className='flex flex-col gap-10 justify-end w-[70%] max-lg:w-[60%] h-auto pr-3'>
                        <div className="flex justify-center items-center max-xl:justify-end mb-2 gap-3">
                            {/* Línea izquierda */}
                            <div className="hidden sm:block w-8  h-1 bg-[#0062FF]"></div>

                            <h1 className="text-lg max-sm:hidden text-[#0062FF] sm:text-2xl md:text-3xl font-semibold text-center tracking-wide">
                                SOBRE NOSOTROS
                            </h1>

                            {/* Línea derecha */}
                            <div className="hidden sm:block w-8  h-1 bg-[#0062FF]"></div>
                        </div>

                        <div className="flex flex-1 flex-row max-lg:flex-col justify-center gap-3 w-full ">
                            {/* Quienes somos */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-3xl shadow-md p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#0062FF] flex-1 h-full flex flex-col">
                                        <h2 className="text-xl sm:text-xl font-bold text-center mb-2 tracking-wider">
                                            ¿Quiénes Somos?
                                        </h2>
                                        <Bounce>
                                            <p className="text-center text-xl font-montserrat font-light tracking-wider">
                                                Somos un equipo apasionado por la tecnología, dedicado a transformar la forma en que las tiendas conectan con sus clientes...
                                            </p>
                                        </Bounce>
                                    </div>
                                </Rotate>
                            </div>

                            {/* Nuestra Misión */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-3xl p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#0062FF] flex-1 h-full flex flex-col">
                                        <h2 className="text-xl sm:text-xl font-bold text-center mb-2 tracking-wider">
                                            Nuestra Misión
                                        </h2>
                                        <Bounce>
                                            <p className="text-center text-xl font-montserrat font-light tracking-wider">
                                                Nuestra misión es ofrecer un sistema de publicidad diseñado específicamente para las necesidades únicas de las tiendas...
                                            </p>
                                        </Bounce>
                                    </div>
                                </Rotate>
                            </div>

                            {/* Nuestra Visión */}
                            <div className="flex flex-1 flex-col justify-between items-stretch bg-white rounded-3xl p-4 h-auto mb-4 md:mb-2">
                                <Rotate>
                                    <div className="text-[#0062FF] flex-1 h-full flex flex-col">
                                        <h2 className="text-xl sm:text-xl font-bold text-center mb-2 tracking-wider">
                                            Nuestra Visión
                                        </h2>
                                        <Bounce>
                                            <p className="text-center text-xl font-montserrat font-light tracking-wider">
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
