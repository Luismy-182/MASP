import React from 'react'
import { Link } from 'react-router-dom'
import { File, Code } from 'lucide-react'
import ProjectSlider from './ProjectSlider'

const SelectWorkCard = () => {

  const apv={

  }
  const devJobs={

  }
  const freshCoffee={

  }
  const projects=[
    apv, 
    devJobs,
    freshCoffee
  ]


  return (
    <>
      <div className="mt-20 md:mt-28">

        {/* card-1 */}
        <div className="my-20 md:my-28 py-16 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-sm hover:shadow-lg transition-shadow duration-300  px-6 md:px-10 rounded-2xl">

          <div className="w-full rounded-xl overflow-hidden border aspect-16/10  border-slate-200 bg-slate-100">
            <ProjectSlider images={projects} />
          </div>

          <div className="w-full">
            <h2 className='text-slate-900 text-3xl md:text-4xl mt-0 mb-5 font-bold'>Fresh Coffee — Sistema de pedidos para quiosco de comida</h2>
            <p className='text-slate-600 mt-6  max-w-2xl leading-relaxed text-lg md:text-xl'>Aplicación full-stack para la gestión de pedidos en un quiosco de comida.
              Los usuarios pueden registrarse, explorar un catálogo de bebidas y platillos, crear pedidos y calcular automáticamente el total de la orden.
              Incluye autenticación de usuarios, protección de rutas y un panel administrativo para gestionar productos y visualizar pedidos en tiempo real.</p>
            <p className='text-slate-500 mt-4  max-w-2xl leading-relaxed text-base md:text-lg font-medium'>Laravel · React · REST API · Context API · SWR · TailwindCSS</p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-4 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 items-center
                                "
                to=""
              >
                <Code
                  className='inline w-4 h-4' />
                Ver código
              </Link>
            </div>

          </div>

        </div>

        {/* card-2 */}
        <div className="my-20 md:my-28 py-16 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-sm hover:shadow-lg
transition-shadow duration-300 px-6 md:px-10 rounded-2xl">


          <div className="w-full">
            <h2 className='text-slate-900 text-3xl md:text-4xl mt-0 mb-5 font-bold'>APV — Sistema de gestión de pacientes veterinarios</h2>
            <p className='text-slate-600 mt-6   max-w-2xl leading-relaxed text-lg md:text-xl'>Aplicación web desarrollada con el stack MERN para la gestión de pacientes en clínicas veterinarias.
              Permite a los veterinarios registrarse, autenticarse y administrar el registro de sus propios pacientes mediante un panel privado.
              El sistema incluye recuperación de contraseña por correo electrónico, validaciones en tiempo real y control de acceso para garantizar que cada usuario gestione únicamente su propia información.</p>
            <p className='text-slate-500 mt-4  max-w-2xl leading-relaxed text-base md:text-lg'>MongoDB · Express · React · Node.js · JWT · Context API · Mongoose · TailwindCSS </p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-4 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 items-center
                                "
                to=""
              >
                <Code
                  className='inline w-4 h-4' />
                Ver código
              </Link>
            </div>

          </div>

          <div className="w-full rounded-xl overflow-hidden  border aspect-16/10  border-slate-200 bg-slate-100">
            <ProjectSlider />
          </div>


        </div>


        {/* card-3 */}
        <div className="my-20 md:my-28 py-16 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-sm hover:shadow-lg
transition-shadow duration-300 px-6 md:px-10 rounded-2xl">

          <div className="w-full rounded-xl overflow-hidden border aspect-16/10 border-slate-200 bg-slate-100">
            <ProjectSlider />
          </div>

          <div className="w-full">
            <h2 className='text-slate-900 text-3xl md:text-4xl mt-0 mb-5 font-bold'>DevJobs — Plataforma de publicación y gestión de empleos</h2>
            <p className='text-slate-600 mt-6  max-w-2xl leading-relaxed text-lg md:text-xl'>Aplicación web desarrollada con Laravel que permite publicar y gestionar vacantes laborales desde una plataforma similar a un portal de empleo. Incluye autenticación de usuarios, gestión de roles y panel administrativo para administrar ofertas de trabajo.</p>
            <p className='text-slate-500 mt-4  max-w-2xl leading-relaxed text-base md:text-lg'>Laravel · Livewire · TailwindCSS · Laravel Breeze · Eloquent ORM</p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-4 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 items-center
                                "
                to=""
              >
                <Code
                  className='inline w-4 h-4' />
                Ver código
              </Link>
            </div>

          </div>

        </div>




      </div>

    </>
  )
}

export default SelectWorkCard