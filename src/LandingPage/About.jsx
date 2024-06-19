import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Nuestra solución está diseñada para hacer un poco más fácil el mundo de la contabilidad.</h2>
                <p className='text-3xl py-6 text-gray-500'> Reconociendo la importancia crucial de la contabilidad, la cual proporciona un registro sistemático y actualizado de todas las transacciones financieras de una organización, 
                    nuestro sistema busca facilitar la comparación entre el estado financiero actual y los datos históricos.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>Facil de usar</p>
                    <p className='text-gray-400 mt-2'>Quick-Books es amigable para todo mundo</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>Pyme</p>
                    <p className='text-gray-400 mt-2'>No solo es de uso empresarial si no para Pymes igual</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Adaptable en cualquier dispositivo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About