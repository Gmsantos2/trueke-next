import React from 'react'
import Image from 'next/image'
import styles from '../styles/hero.module.css'

const Hero = () => {
    return (
        <div className='relative container pt-8 flex h-[60vh] w-full justify-between content-center md:flex-row mx-auto gap-9'>
            <div className='flex flex-col gap-3 pl-8 pt-4 font-montserrat justify-start text-[#0062FF]  w-[100vw] md:w-[50vw] 2xl:h-[30vh] 2xl:justify-center lg:pt-0  z-0'>   
                <span className='px-6 pt-4 max-md:w-[80vw] lg:w-[40vw] justify-center p-2 font-black italic align-middle text-xl lg:text-2xl 2xl:w-[25vw] leading-tight tracking-wide'>
                    Impulsa tu negocio con nuestro sistema de publicidad
                </span>                       
                <p className='w-[40vw] max-md:w-[70vw] lg:w-[40vw] px-6 leading-normal text-xl xl:text-2xl 2xl:w-[24vw] max-lg:text-base max-sm:hidden'>
                    La plataforma integral para gestionar, optimizar y analizar todas tus campañas publicitarias desde un solo lugar 
                </p>                 
            </div>

            <div className='flex absolute top-0 right-0 h-[100%] w-[60%] max-w-[900px]   max-md:hidden -z-10 '>
                <Image 
                    src="/trueke-hero.jpg" 
                    width={650} 
                    height={650} 
                    className={`${styles['image-animated']} object-cover w-full h-auto`} 
                    alt="main" 
                />
            </div>
        </div>
    )
}

export default Hero