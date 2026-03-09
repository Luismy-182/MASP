import React from 'react'
import { Link } from 'react-router-dom'
import { File } from 'lucide-react'

const SelectWorkCard = () => {
  return (
    <>
      <div className="mt-20 md:mt-28">

        {/* card-1 */}
        <div className="my-20 md:my-28 py-15 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-md px-6 ">

          <div className="w-full rounded-xl shadow border">
            <p>Imagen</p>
          </div>

          <div className="w-full px-12">
            <h2 className='text-slate-900 text-3xl md:text-4xl my-5 font-bold'>Título proyecto</h2>
            <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cum </p>
            <p className='text-slate-500 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>stack: Lorem ipsum dolor sit amet consectetur, adipisicing </p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-3 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 
                                "
                to=""
              >
                <File
                  className='inline w-4' />
                Ver código
              </Link>
            </div>

          </div>

        </div>
        {/* card-2 */}
        <div className="my-20 md:my-28 py-15 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-md px-6 ">


          <div className="w-full  px-12">
            <h2 className='text-slate-900 text-3xl md:text-4xl my-5 font-bold'>Título proyecto</h2>
            <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cum </p>
            <p className='text-slate-500 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>stack: Lorem ipsum dolor sit amet consectetur, adipisicing </p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-3 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 
                                "
                to=""
              >
                <File
                  className='inline w-4' />
                Ver código
              </Link>
            </div>

          </div>

          <div className="w-full rounded-xl shadow border">
            <p>Imagen</p>
          </div>


        </div>
        {/* card-3 */}
        <div className="my-20 md:my-28 py-15 md:py-20 block md:grid md:grid-cols-2 gap-12 bg-white w-full shadow-md px-6 ">

          <div className="w-full rounded-xl shadow border">
            <p>Imagen</p>
          </div>

          <div className="w-full  px-12">
            <h2 className='text-slate-900 text-3xl md:text-4xl my-5 font-bold'>Título proyecto</h2>
            <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cum </p>
            <p className='text-slate-500 mt-6 md:mt-8  max-w-2xl leading-relaxed text-lg md:text-xl'>stack: Lorem ipsum dolor sit amet consectetur, adipisicing </p>

            {/* Área de botones */}
            <div className="flex gap-3 mt-6 md:mt-8">
              <Link
                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="#">Ver proyecto</Link>
              <Link

                className="flex gap-2 py-2 px-3 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 
                                "
                to=""
              >
                <File
                  className='inline w-4' />
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