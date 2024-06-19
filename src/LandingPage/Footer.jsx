import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
            <div>
                <h6 className='font-bold uppercase pt-2'>Soporte</h6>
                <ul>
                    <li className='py-1'>Documentación</li>
                    <li className='py-1'>Guías</li>
                    <li className='py-1'>Estatus del servidor</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Compañia</h6>
                <ul>
                    <li className='py-1'>Acerca de nosotros</li>
                    
                    <li className='py-1'>Empresa</li>
                    <li className='py-1'>Asociados</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Reclamos</li>
                    <li className='py-1'>Privacidad</li>
                    <li className='py-1'>Terminos</li>
                    <li className='py-1'>Politicas</li>
                    <li className='py-1'>Condiciones de uso</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>¿Quejas o sugerencias?</p>
                <p className='py-4'>!Mandanos un correo y te escribiremos¡</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Enviar</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 MiracleWorks, Todos los derechos reservados</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer