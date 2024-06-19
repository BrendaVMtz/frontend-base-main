import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>¿Por que usar Quick-Books?</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        El proyecto desarrolla un software de gestión financiera completo para individuos y empresas, facilitando la administración efectiva de sus finanzas.
        El proyecto desarrolla un software de gestión financiera completo para individuos y empresas, facilitando la administración efectiva de sus finanzas.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Agilización</h3>
              <p className='text-lg pt-2 pb-4'>
              Este enfoque busca agilizar y optimizar el proceso contable, permitiendo que los contadores dediquen más tiempo a análisis estratégico y asesoramiento, en lugar de tareas rutinarias y repetitivas. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Adaptabilidad</h3>
              <p className='text-lg pt-2 pb-4'>
              Adoptar plataformas tecnológicas adecuadas, económicas y seguras asegura un acceso a información en tiempo real y reduce los riesgos de pérdida de datos.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Retroalimentación visual</h3>
              <p className='text-lg pt-2 pb-4'>
              La retroalimentación visual informa a los usuarios sobre lo que está sucediendo y si sus acciones han tenido el efecto deseado, permitiendo correcciones y asegurando la comprensión del estado del sistema. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Accesibilidad </h3>
              <p className='text-lg pt-2 pb-4'>
              Una interfaz de usuario debe ser accesible para personas de todas las capacidades.
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
