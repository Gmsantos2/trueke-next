'use client';

import React from 'react';

const Contact = () => {
    return (
        <div className='relative bg-[#0033FF] h-auto w-full flex flex-col justify-start items-start px-4 pb-2'>
            <div className='pt-8'>
                <h2 className="text-white text-2xl md:text-4xl font-semibold px-4 md:px-11">Contacta con nosotros</h2>
            </div>
            <div className='flex flex-col md:flex-row w-full'>
                {/* Formulario */}
                <div className="w-full h-[350px] md:w-1/2 p-4 md:p-11">
                    <form className="space-y-2 h-full flex flex-col justify-between">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full h-[15%] p-2 border border-white bg-white rounded-md focus:bg-white focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Correo"
                            className="w-full h-[15%] p-2 border border-white bg-white rounded-md focus:bg-white focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Asunto"
                            className="w-full h-[15%] p-2 border border-white bg-white rounded-md focus:bg-white focus:outline-none"
                        />
                        <textarea
                            placeholder="Mensaje"
                            className="w-full h-[30%] p-2 border border-white bg-white rounded-md focus:bg-white focus:outline-none"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-yellow-400 w-[90px] text-[#1E1E1E] font-semibold py-2 rounded-lg"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                {/* Información de contacto */}
                <div className="flex flex-col justify-start gap-10 w-full md:w-1/2 p-6 pt-0 text-white mt-6 md:mt-0">
                    <ContactInfo
                        iconSrc="/carbon_building.png"
                        title="Información de la empresa"
                        content="NODO CIA LTDA"
                    />
                    <ContactInfo
                        iconSrc="/Location_Icon.png"
                        title="Dirección"
                        content={["Mexico y Curazao Centro de Negocios Quo Hub", "Loja - Ecuador"]}
                    />
                    <ContactInfo
                        iconSrc="/Email_Icon.png"
                        title="Contacto"
                        content="somebody@gmail.com"
                    />
                </div>
            </div>
        </div>
    );
};

const ContactInfo = ({ iconSrc, title, content }) => (
    <div className="flex gap-4 justify-center items-center">
        <div className='relative w-[50px] md:w-[40px] h-[50px] md:h-[40px]'>
            <img src={iconSrc} alt="icon" className='w-full h-full object-contain' />
        </div>
        <div className='flex flex-col w-[70%] md:w-[30%]'>
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            {Array.isArray(content) ? (
                content.map((text, index) => <p key={index} className="text-sm md:text-base">{text}</p>)
            ) : (
                <p className="text-sm md:text-base">{content}</p>
            )}
        </div>
    </div>
);

export default Contact;
