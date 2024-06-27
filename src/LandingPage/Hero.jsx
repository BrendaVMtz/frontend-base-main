import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../LandingPage/accounter.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Servicios de contabilidad</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>QuickBooks</h1>
                <p className='text-2xl'>"Simplificar la contabilidad, acelerar el éxito". </p>
                <button className='py-3 px-6 sm:w-[60%] my-4'></button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Quick-Books Ofrece herramientas para monitorear ingresos, gastos, inversiones y presupuestos, permitiendo personalizar perfiles y metas financieras.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Hero