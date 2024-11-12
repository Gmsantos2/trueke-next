'use client';

import React from 'react';
import { Slide, Flip, JackInTheBox } from 'react-awesome-reveal';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#FFD521] py-4'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-x-8 max-sm:space-x-0'>
                {/* Logo */}
                <Slide>
                    <div className='mb-2 md:mb-0 flex justify-center items-center'>
                        <div className='w-52 max-sm:w-40 bg-[#0033FF] p-2 rounded-2xl'>
                            <img src="/trueke.png" alt="Logo" className='w-full' />
                        </div>
                    </div>
                </Slide>

                {/* Acerca de Nosotros */}
                <div className="text-[#1E1E1E] p-8 rounded-lg max-w-md mx-auto max-lg:hidden">
                    <h2 className="text-justify text-xl font-semibold uppercase mb-4 text-black">
                        Acerca de Nosotros
                    </h2>
                    <p className="text-base leading-relaxed mb-6 text-justify">
                        Nuestro propósito es inspirar y agregar valor a las personas a través del conocimiento por medio de servicios de conectividad, integración de tecnología y software que ayuden a simplificar y elevar su estilo de vida.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-start gap-5 text-[#FFD521]">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={24} fill='#1E1E1E' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} fill='#1E1E1E' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} fill='#1E1E1E' />
                    </a>
                </div>

                {/* Links */}
                <Flip>
                    <div className='text-center md:text-left flex justify-center items-center'>
                        <ul className='flex flex-col gap-2 text-[#1E1E1E] text-base font-montserrat space-y-1 h-full'>
                            <li>
                                <a href="#" className='hover:text-white p-2 rounded transition-colors duration-300'>
                                    Sobre nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white p-2 rounded transition-colors duration-300'>
                                    Beneficios
                                </a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-white p-2 rounded transition-colors duration-300'>
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </Flip>
            </div>

            {/* Copyright */}
            <JackInTheBox>
                <div className='mt-4 pt-2 text-center'>
                    <p className='text-[#1E1E1E] text-xs font-montserrat'>
                        COPYRIGHT © {new Date().getFullYear()} | NODO
                    </p>
                </div>
            </JackInTheBox>
        </footer>
    );
};

export default Footer;
